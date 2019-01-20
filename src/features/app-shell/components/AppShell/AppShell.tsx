import React from 'react';
import { observer } from 'mobx-react';
import { Router, navigate } from '@reach/router';
import { StoreContext } from 'RootStore';
import { AppShellStore } from 'features/app-shell';
import { Setup, Wizard } from 'features/setup';
import { SessionPrompt, SignIn } from 'features/session';
import { Dashboard } from 'features/dashboard';
import './AppShell.scss';

interface Props {
  store: AppShellStore;
}

const AppShellObserver = observer(({ store }: Props) => {
  const { session, settings } = store;
  if (!session && !settings.isSetupComplete) {
    navigate('/setup');
  } else if (!settings.isSetupComplete) {
    navigate('/setup/wizard');
  }

  return (
    <Router>
      <Setup path="/setup">
        <SessionPrompt path="/" />
        <SignIn path="signin" />
        <Wizard path="wizard" />
      </Setup>
      <Dashboard path="/" />
    </Router>
  );
});

export const AppShell = () => (
  <StoreContext.Consumer>
    {({ appShell }) => <AppShellObserver store={appShell} />}
  </StoreContext.Consumer>
);
