import { List } from 'immutable';
import { call, put, fork, take, select, takeEvery } from 'redux-saga/effects';
import * as GameStatusState from '../../dux/gameStatus';

function* getRandomPosition() {
  const state = yield select();

  try {
    const board = state.getIn(['gameStatus', 'board'], List());

    while (true) {
      const randomRow = Math.floor(Math.random() * board.size) + 0;
      const randomCol = Math.floor(Math.random() * board.size) + 0;

      if (!board.getIn([randomRow, randomCol])) {
        return [randomRow, randomCol];
      }
    }
  } catch (e) {
    console.log('oops, depr:', e);
  }

  return [];
}

function* placePiece() {
  console.log('bot placing?');
  const position = yield call(getRandomPosition);
  console.log('position', position);
  if (position) {
    yield put(GameStatusState.setPiece(position));
  }
}

function* randomBotSaga() {
  yield takeEvery(GameStatusState.BOT_TURN, placePiece);
}

export default randomBotSaga;
