import React from 'react';
import { observer } from 'mobx-react';
import { Loader } from 'semantic-ui-react';
import { RootStore, StoreContext } from 'RootStore';

interface Props {
  store: RootStore;
}

@observer
class AppShell extends React.Component<Props> {
  componentDidMount() {
    this.props.store.appShell.loadSettings();
  }

  render() {
    const { settings } = this.props.store.appShell;
    if (!settings) return <Loader active />;
    if (!settings.isSetupComplete) return <div>setup first</div>;

    return <div>App loaded</div>;
  }
}

export default () => (
  <StoreContext.Consumer>
    {store => <AppShell store={store} />}
  </StoreContext.Consumer>
);
