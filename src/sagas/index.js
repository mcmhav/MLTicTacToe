import { fork } from 'redux-saga/effects';

import initFlow from './initFlow';

export default function* rootSaga() {
  yield fork(initFlow);
}
