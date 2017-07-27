import { createLogger } from 'redux-logger';

export default createLogger({
  collapsed: true,
  colors: {
    title: () => '#FFA500',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  },

  // only log in development mode
  predicate: () => __DEV__,

  // transform immutable state to plain objects
  stateTransformer: state => state.toJS(),

  // transform immutable action payloads to plain objects
  actionTransformer: action =>
    (action && action.payload && action.payload.toJS
      ? { ...action, payload: action.payload.toJS() }
      : action),
});
