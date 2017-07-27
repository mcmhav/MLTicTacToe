import { Map } from 'immutable';

export const NETWORK_CHANGED = 'Network/NETWORK_CHANGED';

// Initial state
const initialState = Map({
  isConnected: null,
});

export function changeNetwork(isConnected) {
  return {
    type: NETWORK_CHANGED,
    isConnected,
  };
}

// Reducer
export default function NetworkStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NETWORK_CHANGED:
      return state
        .set('isConnected', action.isConnected);
    default:
      return state;
  }
}
