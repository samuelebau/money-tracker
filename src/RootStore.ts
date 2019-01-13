import React from 'react';
import { configure, observable } from 'mobx';
import AppShellStore from 'features/app-shell/state/AppShell';

configure({
  enforceActions: 'observed'
});

export class RootStore {
  @observable appShell = new AppShellStore();
}

export const StoreContext = React.createContext({} as RootStore);
