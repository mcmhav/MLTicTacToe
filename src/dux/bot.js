import { Map, List } from 'immutable';

export const SET_PIECE = 'BoardState/SET_PIECE';
export const WIN = 'BoardState/WIN';
export const RESET = 'BoardState/RESET';

const initialState = Map({

});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PIECE:
      return state;
    default:
      return state;
  }
}
