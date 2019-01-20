import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';
import * as Sentry from '@sentry/browser';
import ErrorBoundary from 'components/Sentry/ErrorBoundary';
import { AppShell } from 'features/app-shell';
import { RootStore, StoreContext } from './RootStore';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Loader } from 'semantic-ui-react';

Sentry.init({
  dsn: 'https://5ae855d4c1d840c1b06679123069574f@sentry.io/1335198'
});

interface State {
  store?: RootStore;
}

class Root extends React.Component<{}, State> {
  state = {
    store: undefined
  };

  async componentDidMount() {
    const store = await RootStore.init();
    this.setState({ store });
  }

  render() {
    const { store } = this.state;

    return (
      <ErrorBoundary>
        <DevTools />
        {!store ? (
          <Loader active />
        ) : (
          <StoreContext.Provider value={store}>
            <AppShell />
          </StoreContext.Provider>
        )}
      </ErrorBoundary>
    );
  }
}

render(<Root />, document.getElementById('root'));

registerServiceWorker();
// @ts-ignore
if (module.hot) module.hot.accept();
