import { List } from 'immutable';
import { put, fork, take, select, takeEvery } from 'redux-saga/effects';
import * as GameStatusState from '../dux/gameStatus';

const isWinRow = (cell1, cell2, cell3) => {
  if (
      typeof cell1 === 'number' &&
      typeof cell2 === 'number' &&
      typeof cell3 === 'number' &&
      cell1 === cell2 &&
      cell2 === cell3 &&
      cell1 === cell3
  ) {
    return cell1;
  }
  return null;
};

const verticalWin = (board, rowNum) => {
  return isWinRow(
    board[rowNum][0],
    board[rowNum][1],
    board[rowNum][2],
  );
};

const horizontalWin = (board, colNum) => {
  return isWinRow(
    board[0][colNum],
    board[1][colNum],
    board[2][colNum],
  );
};

const leftDiogonalWin = (board) => {
  return isWinRow(
    board[0][0],
    board[1][1],
    board[2][2],
  );
};

const rightDiogonalWin = (board) => {
  return isWinRow(
    board[0][2],
    board[1][1],
    board[2][0],
  );
};

const getWinPlayer = (board) => {
  const winPlayer =
    verticalWin(board, 0) ||
    verticalWin(board, 1) ||
    verticalWin(board, 2) ||
    horizontalWin(board, 0) ||
    horizontalWin(board, 1) ||
    horizontalWin(board, 2) ||
    leftDiogonalWin(board) ||
    rightDiogonalWin(board);

  return winPlayer;
};

function* checkForWin() {
  const state = yield select();

  try {
    const board = state.getIn(['gameStatus', 'board'], List()).toJS();

    const winPlayer = getWinPlayer(board);
    if (typeof winPlayer === 'number') {
      yield put(GameStatusState.gameWon(winPlayer));
    }
  } catch (e) {
    console.log('oops, depr:', e);
  }
}

function* winStatusSaga() {
  yield takeEvery(GameStatusState.SET_PIECE_FOR_PLAYER, checkForWin);
}

export default winStatusSaga;
