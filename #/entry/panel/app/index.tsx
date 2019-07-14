import styled from '#/styled';
import { Tab, TabBar } from '@rmwc/tabs';
import * as React from 'react';
import Logs from './containers/logs';
import Mocks from './containers/mocks';

interface IState {
  activeTab: keyof typeof tabs;
}

enum tabs {
  logs,
  mocks,
}

const Wrapper = styled.div``;

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    activeTab: 'logs',
  };

  public render() {
    const { activeTab } = this.state;

    return (
      <>
        <TabBar
          activeTabIndex={tabs[activeTab]}
          onActivate={evt =>
            this.setState({
              activeTab: tabs[evt.detail.index] as keyof typeof tabs,
            })
          }
        >
          <Tab label="Logs" />
          <Tab label="Mocks" />
        </TabBar>
        <Wrapper>{activeTab === 'logs' ? <Logs /> : <Mocks />}</Wrapper>
      </>
    );
  }
}
