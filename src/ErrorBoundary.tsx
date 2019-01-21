import React from 'react';
import * as Sentry from '@sentry/browser';

interface State {
  error?: Error;
}

export class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error, errorInfo: Record<string, any>) {
    this.setState({ error });

    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <button onClick={() => Sentry.showReportDialog()}>
          Report feedback
        </button>
      );
    } else {
      //when there's not an error, render children untouched
      return this.props.children;
    }
  }
}
