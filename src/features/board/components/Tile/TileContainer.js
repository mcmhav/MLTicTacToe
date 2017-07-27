import { List } from 'immutable';
import { connect } from 'react-redux';

import * as GameStatusState from '../../../../dux/gameStatus';


import Tile from './Tile';

const mapStateToProps = (state, props) => {
  return {
    value: state
      .getIn(['gameStatus', 'board'], List([]))
      .get(props.tilePosition[0], List([]))
      .get(props.tilePosition[1]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPiece: (position) => dispatch(GameStatusState.setPiece(position)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
