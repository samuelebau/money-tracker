import React from 'react';
import { observer } from 'mobx-react';
import { RouteComponentProps } from '@reach/router';
import { Header, Segment, Step } from 'semantic-ui-react';
import './Wizard.scss';

export const Wizard: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <Segment.Group className="Wizard u-container">
      <Segment attached>
        <Header icon="cogs" content="MoneyTracker Setup" />
      </Segment>
      <Step.Group fluid attached size="tiny">
        <Step title="Currency" icon="yen sign" active />
        <Step title="Categories" icon="tasks" />
        <Step title="Groups" icon="folder open outilne" />
        <Step title="Accounts" icon="credit card outline" />
      </Step.Group>
      <Segment attached>wizard steps</Segment>
    </Segment.Group>
  );
};
