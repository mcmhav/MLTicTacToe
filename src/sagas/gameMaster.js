import { List } from 'immutable';
import { call, put, fork, take, select, takeEvery } from 'redux-saga/effects';
import * as GameStatusState from '../dux/gameStatus';

let currentPlayer = 1;

function shouldTriggerBot() {
  return currentPlayer === 2;
}

function* isGameOver() {
  const state = yield select();
  const board = state.getIn(['gameStatus', 'board'], List());

  let isDone = true;

  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell === null) {
        isDone = false;
        return;
      }
    });
    if (!isDone) {
      return;
    }
  });

  return isDone;
}

function* handlePlacedPiece(action) {
  try {
    yield put(GameStatusState.setPieceForPlayer(action.position, currentPlayer));

    currentPlayer = currentPlayer === 1 ? 2 : 1;


    const shouldStopGame = yield call(isGameOver);
    console.log(shouldStopGame);
    if (shouldStopGame) {
      yield put(GameStatusState.gameOver());
    }
    if (!shouldStopGame && shouldTriggerBot()) {
      yield put(GameStatusState.botTurn());
    }
  } catch (e) {
    console.error(e);
  }
}

function* piecePlacement() {
  yield takeEvery(GameStatusState.SET_PIECE, handlePlacedPiece);
}

function resetCurrentPlayer() {
  currentPlayer = 1;
}

function* reset() {
  yield takeEvery(GameStatusState.RESET, resetCurrentPlayer);
}

function* gameMaster() {
  yield fork(piecePlacement);
  yield fork(reset);
}

export default gameMaster;
