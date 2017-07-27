import { fork } from 'redux-saga/effects';

import network from './network';
import gameMaster from './gameMaster';

import winStatus from './winStatus';
import random from './bots/random';

function* initFlowSaga() {
  yield fork(network);

  yield fork(gameMaster);

  yield fork(winStatus);
  yield fork(random);
}

export default initFlowSaga;
