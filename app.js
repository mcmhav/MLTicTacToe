import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { App } from './src/features/app';
import store from './src/redux/store';

class MLTicTacToe extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

console.disableYellowBox = true;

export default MLTicTacToe;
