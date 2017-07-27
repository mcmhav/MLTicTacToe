import { connect } from 'react-redux';

import Board from './Board';

const mapStateToProps = (state) => {
  return {
    size: state.getIn(['gameStatus', 'board']).size,
    victor: state.getIn(['gameStatus', 'victor']),
    gameOver: state.getIn(['gameStatus', 'gameOver']),
  };
};

export default connect(mapStateToProps)(Board);
