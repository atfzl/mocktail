import NetworkRowItem from '#/entry/panel/app/components/networkRowItem';
import { RootState } from '#/reducers';
import { List } from '@rmwc/list';
import * as React from 'react';
import { connect } from 'react-redux';

type IStateProps = ReturnType<typeof mapStateToProps>;

type IProp = IStateProps;

class Logs extends React.Component<IProp> {
  public render() {
    const { rows } = this.props;
    return (
      <List style={{ padding: '12px' }}>
        {rows.map(row => (
          <NetworkRowItem {...row} />
        ))}
      </List>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    rows: state.network.rows,
  };
};

export default connect(mapStateToProps)(Logs);
