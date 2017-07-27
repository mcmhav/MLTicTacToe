import AppStateReducer from '../dux/app';
import NetworkStateReducer from '../dux/network';
import GameStateReducer from '../dux/gameStatus';

const reducers = {
  app: AppStateReducer,
  network: NetworkStateReducer,
  gameStatus: GameStateReducer,
};

export default reducers;
