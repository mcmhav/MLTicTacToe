import React, { Component, PropTypes } from 'react';
import rn from 'react-native';
// import {
//   View,
//   Text,
//   ScrollView,
// } from 'react-native';


import Tile from '../../components/Tile';
import WinView from '../../components/WinView';

import styles from './styles';

const {
  View,
  ScrollView,
} = rn;

class Board extends Component {
  static propTypes = {
    size: PropTypes.number,
    victor: PropTypes.number,
    gameOver: PropTypes.bool,
  }

  static defaultProps = {
    size: 9,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      size,
      victor,
      gameOver,
    } = this.props;

    const rowsHelper = new Array(size).fill();

    console.log('render board');

    let stopOverlay;

    if (victor || (gameOver && victor)) {
      stopOverlay = <WinView />;
    } else if (gameOver) {
      stopOverlay = <WinView />;
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          {
            rowsHelper.map((e, ri) => {
              return (
                <View key={ri} style={styles.tileRow}>
                  {
                    rowsHelper.map((c, ci) => {
                      return <Tile key={`${ri}-${ci}`} tilePosition={[ri, ci]} />;
                    })
                  }
                </View>
              );
            })
          }
        </View>
        {
          stopOverlay
        }
      </ScrollView>
    );
  }
}

export default Board;
