import React from 'react';
import { observer } from 'mobx-react';
import { RouteComponentProps, redirectTo } from '@reach/router';
import { StoreContext } from 'RootStore';
import { AppShellStore } from 'features/app-shell';

interface Props {
  store: AppShellStore;
}

@observer
class SetupObserver extends React.Component<Props> {
  render() {
    const { settings } = this.props.store;
    if (settings.isSetupComplete) {
      redirectTo('/');
    }

    return this.props.children;
  }
}

export const Setup: React.FunctionComponent<RouteComponentProps> = ({
  children
}) => (
  <StoreContext.Consumer>
    {({ appShell }) => <SetupObserver store={appShell} children={children} />}
  </StoreContext.Consumer>
);
