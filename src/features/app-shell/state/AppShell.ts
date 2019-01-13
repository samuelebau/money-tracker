import { observable, action, runInAction } from 'mobx';
import Settings from 'features/settings';
import Session from 'features/session';

class AppShellStore {
  @observable settings?: Settings;
  @observable session?: Session;
  @observable isSyncRunning: boolean = false;

  @action async loadSettings() {
    const settings = await Settings.load();

    runInAction('load settings complete', () => {
      this.settings = settings;
    });
  }
}

export default AppShellStore;
