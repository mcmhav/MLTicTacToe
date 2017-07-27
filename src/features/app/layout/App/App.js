import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import { Board } from '../../../board';

import styles from './styles';

class App extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);

    this.state = {
      stateKey: 'something',
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Board />
        </View>
      </ScrollView>
    );
  }
}

export default App;
