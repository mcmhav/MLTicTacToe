import { connect } from 'react-redux';

import * as GameStatusState from '../../../../dux/gameStatus';

import WinView from './WinView';

const mapStateToProps = (state) => {
  return {
    victor: state.getIn(['gameStatus', 'victor']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(GameStatusState.resetGame());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WinView);
