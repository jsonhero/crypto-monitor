import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import * as uuid from "uuid/v4";
import * as _ from "lodash";
import dbConnection from "../db/db-connection";

 /*
 - Pull all markets from db
 - Request each market endpoint for a ticker snapshot
 - Add db entry for market ticker snapshot
 - wait a certain amount of time
 - repeat process
 */


class TickerRequester {
  endpoint_url: string;
  lastRequestTimestamp: number;
  isRequesting: boolean;
  responseHandler: Function;

  constructor(endpoint_url: string, responseHandler: any) {
    this.endpoint_url = endpoint_url;

    this.isRequesting = false;
    this.lastRequestTimestamp = 0;
    this.responseHandler = responseHandler;
  }

  setRequesting(): void {
    this.isRequesting = true;
  }

  doneRequesting(): void {
    this.isRequesting = false;
    this.resetTime();
  }

  currentlyRequesting(): boolean {
    return this.isRequesting;
  }

  timeSinceRequest(): number {
    return Date.now() - this.lastRequestTimestamp;
  }

  resetTime(): void {
    this.lastRequestTimestamp = Date.now();
  }

  getEndpoint(): string {
    return this.endpoint_url;
  }
}

class TickerManager {
  requesters: Array<TickerRequester>;
  constructor() {
    this.requesters = [];
  }

  addMultiple(tickerRequesters: Array<TickerRequester>) {
    this.requesters = [...this.requesters, ...tickerRequesters];
  }

  addEndpoint(tickerRequester: TickerRequester): void {
    this.requesters.push(tickerRequester);
  }

  removeEndpoint(endpoint_url: string): void {
    this.requesters = this.requesters.filter((requester) => requester.getEndpoint() !== endpoint_url);
  }

  getAll(): Array<TickerRequester> {
    return this.requesters;
  }

  clearAll(): void {
    this.requesters = [];
  }

}

class TickerRunner {
  manager: TickerManager;
  maxConcurrentRequests: number;
  requestRepeatInterval: number;
  activeRequests: Map<String, TickerRequester>;
  constructor(manager: TickerManager, requestRepeatInterval = 1500, maxRequests = 20) {
    this.manager = manager;

    this.maxConcurrentRequests = maxRequests;
    this.requestRepeatInterval = requestRepeatInterval;
    this.activeRequests = new Map();
  }

  releaseRequest(requestUuid: string): void {
    const tickerRequester = this.activeRequests.get(requestUuid);
    tickerRequester.doneRequesting();
    this.activeRequests.delete(requestUuid);
  }

  openRequest(tickerRequester: TickerRequester): string {
    const id = uuid();
    tickerRequester.setRequesting();
    this.activeRequests.set(id, tickerRequester);
    return id;
  }

  getStaleRequester(minTime: number): TickerRequester {
    const requesters = this.manager.getAll();
    return requesters.reduce((oldest: any, current: any) => {
      // Don't check requests in mid-flight or requests that haven't surpassed the minimum time frame
      const currentTime = current.timeSinceRequest();
      if (current.currentlyRequesting() || currentTime < minTime) {
        return oldest;
      }

      if (!oldest) return current;

      if (currentTime > oldest.timeSinceRequest()) {
        return current;
      }
      return oldest;
    }, undefined);
  }

  async makeRequest(tickerRequester: TickerRequester) {
    const id = this.openRequest(tickerRequester);
    try {
      const { data } = await axios.get(tickerRequester.getEndpoint());
      tickerRequester.responseHandler(data);
    } catch (e) {
      console.log(e, "Error requesting");
    }
    finally {
      this.releaseRequest(id);
    }
  }

  start() {
    setTimeout(() => {
      if (this.activeRequests.size < this.maxConcurrentRequests) {
        const staleRequester = this.getStaleRequester(this.requestRepeatInterval);
        if (staleRequester) {
          this.makeRequest(staleRequester);
        }
      }
      this.start();
    }, 0);
  }
}

async function myResponseHandler () {

}

function translationHandler(translation, market_currency_id) {
  return (data) => {
    return {
      market_currency_id,
      price: _.get(data, translation.price),
      bid: _.get(data, translation.bid),
      ask: _.get(data, translation.ask),
    };
  };
}

function tickerInsert(translateData: Function) {
  return async (data) => {
    const sequelize = await dbConnection();
    const { MarketTicker } = sequelize.models;
    const translatedResponse = translateData(data);
    console.log(translatedResponse, "rep");
    // const created = await MarketTicker.create(translatedResponse);
    // console.log(created, "CREATeD");
  };
}

async function getMarketCurrencies() {
  const requesters = [];

  const sequelize = await dbConnection();
  const { Currency, Market } = sequelize.models;
  const markets = await Market.findAll();
  for (let i = 0; i < markets.length; i++) {
    const market = markets[i];
    const currencies = await market.getCurrencies({
      include: [
        { model: Currency, as: "quoteCurrency" },
        { model: Currency, as: "baseCurrency" },
      ],
    });
    const market_api_path = market.get("api_path");
    for (let c = 0; c < currencies.length; c++) {
      const currency = currencies[c];
      const quote: string = currency.quoteCurrency.get("currency_name");
      const base: string = currency.baseCurrency.get("currency_name");
      const currencyRequestUrl: string = market_api_path.replace(/(@{base})|(@{quote})/gi, function(matched) {
        if (matched === "@{base}") {
          return base;
        } else if (matched === "@{quote}") {
          return quote;
        }
      });
      const translationData = translationHandler(market.get("api_translation"), currency.get("id"));
      const responseHandler = tickerInsert(translationData);
      const tickerRequester = new TickerRequester(currencyRequestUrl, responseHandler);
      requesters.push(tickerRequester);
    }
  }
  return requesters;
}


async function runner() {
  const tickerManager = new TickerManager();
  const requesters = await getMarketCurrencies();
  tickerManager.addMultiple(requesters);
  const tickerRunner = new TickerRunner(tickerManager);

  tickerRunner.start();
}

export default runner;