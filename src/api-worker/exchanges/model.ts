// import URL from "url";
import axios from "axios";

export class ExchangeCurrency {
  exchange_name: string;
  exchange_currency_id: string;
  base_currency_id: string;
  constructor(exchange_name: string, base_currency_id: string, exchange_currency_id: string) {
    this.exchange_name = exchange_name;
    this.exchange_currency_id = exchange_currency_id;
    this.base_currency_id = base_currency_id;
  }

  getExchangeName(): string {
    return this.exchange_name;
  }

  getExchangeCurrency(): string {
    return this.exchange_currency_id;
  }

  getBaseCurrency(): string {
    return this.base_currency_id;
  }

}


export class Exchange {
  exchange_name: string;
  api_url: string;
  currencies: Array<ExchangeCurrency>;
  constructor(exchange_name: string, api_url: string) {
    this.exchange_name = exchange_name;
    this.api_url = api_url;
    this.currencies = [];
  }

  public getApiUrl(): string {
    return this.api_url;
  }

  public getTickerUrl(currency_id: string): string {
    const url = `${this.getApiUrl()}/ticker/${currency_id}`;
    return url.toString();
  }

  public async retrieveTicker(currency_id: string) {
    const tickerResponse = await this.fetchData(this.getTickerUrl(currency_id));
    return this.normalizeTickerResult(tickerResponse.data);
  }

  public normalizeTickerResult(data: any) {
    return data;
  }

  private async fetchData(url: string) {
    const result = await axios.get(url);
    return result;
  }

  public addCurrency(base_currency_id: string, exchange_currency_id: string): void {
    this.currencies.push(new ExchangeCurrency(this.exchange_name, base_currency_id, exchange_currency_id));
  }

  public getCurrencies(): Array<ExchangeCurrency> {
    return this.currencies;
  }
}