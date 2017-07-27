import { Map } from 'immutable';

export const INITIALIZED = 'AppState/INITIALIZED';

const initialState = Map({
  initialized: false,
});

export function appInitialized() {
  return {
    type: INITIALIZED,
  };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZED:
      return state.set('initialized', true);
    default:
      return state;
  }
}
