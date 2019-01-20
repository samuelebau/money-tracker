import { observable, action } from 'mobx';
import { SessionStore } from 'features/session';
import { SettingsStore } from 'features/settings';

interface AppShellStoreT {
  session?: SessionStore;
  settings: SettingsStore;
}

export class AppShellStore {
  @observable session?: SessionStore;
  @observable settings: SettingsStore;
  @observable isSyncRunning: boolean = false;

  constructor({ session, settings }: AppShellStoreT) {
    this.session = session;
    this.settings = settings;
  }

  static async init() {
    const session = SessionStore.init();
    const settings = await SettingsStore.init();

    return new AppShellStore({ session, settings });
  }

  @action.bound initGuestSession() {
    this.session = SessionStore.initGuest();
  }
}
