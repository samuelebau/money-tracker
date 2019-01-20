import React from 'react';
import { configure, observable } from 'mobx';
import { AppShellStore } from 'features/app-shell';

configure({
  enforceActions: 'observed'
});

export class RootStore {
  @observable appShell: AppShellStore;

  constructor({ appShell }: RootStore) {
    this.appShell = appShell;
  }

  static async init() {
    const appShell = await AppShellStore.init();

    return new RootStore({ appShell });
  }
}

export const StoreContext = React.createContext({} as RootStore);
