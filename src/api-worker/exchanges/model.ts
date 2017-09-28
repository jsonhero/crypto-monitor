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

  getTickerURL(currency_id: string): string {
    const url = new URL(`${this.api_url}/ticker/${currency_id}`);
    return url.toString();
  }

  async retrieveTicker(currency_id: string) {
    await this.fetchData(this.getTickerURL(currency_id));
  }

  normalizeTickerResult(data: any) {
    return data;
  }

  async fetchData(url: string) {
    const result = await axios.get(url);
    return result;
  }

  addCurrency(base_currency_id: string, exchange_currency_id: string): void {
    this.currencies.push(new ExchangeCurrency(this.exchange_name, base_currency_id, exchange_currency_id));
  }

  getCurrencies(): Array<ExchangeCurrency> {
    return this.currencies;
  }
}