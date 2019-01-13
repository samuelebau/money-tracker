import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import DevTools from 'mobx-react-devtools';
import AppShell from 'features/app-shell/components/AppShell';
import { RootStore, StoreContext } from './RootStore';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

Sentry.init({
  dsn: 'https://5ae855d4c1d840c1b06679123069574f@sentry.io/1335198'
});

const store = new RootStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <DevTools />
    <AppShell />
  </StoreContext.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
