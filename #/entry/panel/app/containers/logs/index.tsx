import { RootState } from '#/reducers';
import * as React from 'react';
import { connect } from 'react-redux';

class Logs extends React.Component {
  public render() {
    return 'logs';
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    logs: state.network.rows,
  };
};

export default connect(mapStateToProps)(Logs);
