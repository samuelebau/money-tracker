import React from 'react';
import { observer } from 'mobx-react';
import { Header, Segment } from 'semantic-ui-react';
import { RouteComponentProps } from '@reach/router';

export const Wizard: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <Segment.Group className="u-container" size="large" raised>
      <Segment>
        <Header icon="cogs" content="MoneyTracker Setup" />
      </Segment>
      <Segment>wizard steps</Segment>
    </Segment.Group>
  );
};
