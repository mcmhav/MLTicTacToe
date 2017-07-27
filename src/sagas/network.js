import { NetInfo } from 'react-native';
import { eventChannel } from 'redux-saga';
import { put, fork, take } from 'redux-saga/effects';
import * as NetworkState from '../dux/network';

function* initializeNetworkListner() {
  const chan = eventChannel(emitter => {
    const listner = NetInfo
      .isConnected
      .addEventListener('change', isConnected => emitter(isConnected));
    return () => {
      NetInfo
        .isConnected
        .removeEventListner('change', listner);
    };
  });

  while (true) {
    const isConnected = yield take(chan);
    yield put(NetworkState.changeNetwork(isConnected));
  }
}

function* addListner() {
  // const connection2 = yield call(NetInfo.isConnected.fetch);
  // console.log(connection2);

  yield fork(initializeNetworkListner);
}

function* networkSaga() {
  yield fork(addListner);
}

export default networkSaga;
