import React from 'react';
import { observer } from 'mobx-react';
import { RouteComponentProps } from '@reach/router';
import { Header, Segment } from 'semantic-ui-react';
import { StoreContext } from 'RootStore';
import { SessionPrompt, SignIn } from 'features/session';
import { AppShellStore } from 'features/app-shell';
import { Wizard } from 'features/setup';

interface Props {
  store: AppShellStore;
}

@observer
class SetupObserver extends React.Component<Props> {
  render() {
    const { session } = this.props.store;

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
