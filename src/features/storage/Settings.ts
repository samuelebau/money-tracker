import { SettingsT } from 'features/settings';

export default {
  async load(): Promise<SettingsT> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          isSetupComplete: true,
          baseSymbol: 'USD',
          symbols: [],
          exchangeRate: { USD: 1 }
        });
      }, 1000);
    });
  },
  async save(settings: SettingsT): Promise<void> {}
};
