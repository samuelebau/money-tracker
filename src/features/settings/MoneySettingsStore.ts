import { observable, observe, action, toJS, Lambda } from 'mobx';
import { MoneyCode, CurrencyCode, Currency, Stock } from 'features/money';
import { SettingsDB } from './SettingsDB';

export interface MoneySettingsJsonT {
  exchangeRate: Record<MoneyCode, number>;
  baseCurrency: CurrencyCode;
  currencies: Currency[];
  stocks: Stock[];
}

export class MoneySettingsStore {
  @observable exchangeRate: Record<MoneyCode, number>;
  @observable baseCurrency: CurrencyCode;
  @observable currencies: Currency[];
  @observable stocks: Stock[];
  private onChangeDisposer: Lambda;

  constructor({
    exchangeRate,
    baseCurrency,
    currencies,
    stocks
  }: MoneySettingsJsonT) {
    this.exchangeRate = exchangeRate;
    this.baseCurrency = baseCurrency;
    this.currencies = currencies;
    this.stocks = stocks;

    this.onChangeDisposer = observe(this, async ({ object }) => {
      const { exchangeRate, baseCurrency, currencies, stocks } = object;
      await SettingsDB.saveMoneySettings({
        exchangeRate,
        baseCurrency,
        currencies,
        stocks
      });
    });
  }

  @action updateBaseCurrency(currency: CurrencyCode) {
    this.baseCurrency = currency;
  }

  discard() {
    this.onChangeDisposer();
  }
}
