import { observable, action } from 'mobx';
import { SymbolCode, SymbolT } from 'features/symbol';
import SettingsStorage from 'features/storage/Settings';

export interface SettingsT {
  isSetupComplete: boolean;
  baseSymbol: SymbolCode;
  symbols: SymbolT[];
  exchangeRate: Record<SymbolCode, number>;
}

export default class Settings {
  @observable isSetupComplete: boolean;
  @observable baseSymbol: SymbolCode;
  @observable symbols: SymbolT[];
  @observable exchangeRate: Record<SymbolCode, number>;

  constructor({
    isSetupComplete,
    baseSymbol,
    symbols,
    exchangeRate
  }: SettingsT) {
    this.isSetupComplete = isSetupComplete;
    this.baseSymbol = baseSymbol;
    this.symbols = symbols;
    this.exchangeRate = exchangeRate;
  }

  @action static async load(): Promise<Settings> {
    const settings = await SettingsStorage.load();

    return new Settings(settings);
  }

  @action async save(): Promise<void> {
    await SettingsStorage.save(this);
  }
}
