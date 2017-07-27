import { Map, List } from 'immutable';

export const SET_PIECE = 'BoardState/SET_PIECE';
export const SET_PIECE_FOR_PLAYER = 'BoardState/SET_PIECE_FOR_PLAYER';
export const WIN = 'BoardState/WIN';
export const RESET = 'BoardState/RESET';
export const GAME_OVER = 'BoardState/GAME_OVER';

export const BOT_TURN = 'BoardState/BotTurn';

const initialState = Map({
  selectedCells: List([]),
  board: List([
    List([null, null, null]),
    List([null, null, null]),
    List([null, null, null]),
  ]),
  victor: null,
  gameOver: false,
});

/*

1:
board: [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

2:
cells: [null,null,null,null,null,null,null,null,null]

*/

export function setPiece(position) {
  return {
    type: SET_PIECE,
    position,
  };
}

export function setPieceForPlayer(position, player) {
  return {
    type: SET_PIECE_FOR_PLAYER,
    player,
    position,
  };
}

export const gameWon = (winPlayer) => {
  return {
    type: WIN,
    winPlayer,
  };
};

export const resetGame = () => {
  return {
    type: RESET,
  };
};

export const botTurn = () => {
  return {
    type: BOT_TURN,
  };
};

export const gameOver = () => {
  return {
    type: GAME_OVER,
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PIECE_FOR_PLAYER: {
      if (typeof state.get('victor') !== 'number') {
        return state
          .setIn(['board', action.position[0], action.position[1]], action.player);
      }
      return state;
    }
    // return update(
    //     state, {
    //         selectedCells: {
    //             $merge: {
    //                 [action.position]: action.id % 2
    //             }
    //         }
    //     }
    // );
    case WIN:
      return state
        .set('victor', action.winPlayer);
    case GAME_OVER:
      return state
        .set('gameOver', true);
    case RESET:
      return initialState;
    default:
      return state;
  }
}
