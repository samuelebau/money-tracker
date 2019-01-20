import { CurrencyCode } from './Currency';
import { StockSymbol } from './Stock';

export type MoneyCode = CurrencyCode | StockSymbol;

export * from './Currency';
export * from './Stock';
