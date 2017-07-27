import React, { Component, PropTypes } from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  View,
  Animated,
  TouchableWithoutFeedback,
} = ReactNative;

class Tile extends Component {
  static propTypes = {
    value: PropTypes.any,
    tilePosition: PropTypes.array.isRequired,

    // dispatchers:
    setPiece: PropTypes.func,
  }

  static defaultProps = {
    onPress: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(1),

      opacity: new Animated.Value(0),

      position: new Animated.Value(0),
    };

    this.isMarked = this.isMarked.bind(this);

    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.onPress = this.onPress.bind(this);

    this.animateSize = this.animateSize.bind(this);
    this.animatePosition = this.animatePosition.bind(this);
    this.animateWiggle = this.animateWiggle.bind(this);
    this.animateFull = this.animateFull.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.value === 'number') {
      Animated.timing(this.state.opacity, {
        toValue: 1, duration: 500,
      }).start();
    } else if (
      typeof this.props.value === 'number' &&
      typeof nextProps.value !== 'number'
    ) {
      Animated.timing(this.state.opacity, {
        toValue: 0, duration: 500,
      }).start();
    }
  }

  onPressIn() {
    if (!this.isMarked()) {
      this.animateSize(0.8).start();
    }
  }

  onPressOut() {
    if (!this.isMarked()) {
      Animated.sequence([
        this.animateSize(1.2, 100),
        this.animateSize(1, 80),
      ]).start();
    }
  }

  onPress() {
    if (!this.isMarked()) {
      this.animateFull(0.8);
      this.props.setPiece(this.props.tilePosition);
    } else {
      this.animateWiggle();
    }
  }

  isMarked() {
    return typeof this.props.value === 'number';
  }

  animateSize(toValue, duration = 60) {
    return Animated.timing(this.state.size, {
      toValue, duration,
    });
  }
  animatePosition(toValue, duration) {
    return Animated.timing(this.state.position, {
      toValue, duration,
    });
  }

  animateFull(toValue) {
    Animated.sequence([
      Animated.parallel([
        this.animateSize(toValue),
      ]),
      Animated.parallel([
        Animated.sequence([
          this.animateSize(1.2, 100),
          this.animateSize(1, 80),
        ]),
        Animated.timing(this.state.opacity, {
          toValue: 1, duration: 180,
        }),
      ]),
    ]).start();
  }

  animateWiggle() {
    Animated.sequence([
      this.animatePosition(-10, 20),
      this.animatePosition(10, 20),
      this.animatePosition(-10, 20),
      this.animatePosition(10, 20),
      this.animatePosition(0, 20),
    ]).start();
  }

  render() {
    const {
      value,
    } = this.props;

    const { size, opacity, position } = this.state;

    const pressBeat = {
      transform: [{
        scale: size,
      }],
      left: position,
    };
    const markedOpacity = {
      opacity,
      backgroundColor: value === 1 ? 'blue' : 'green',
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          onPress={this.onPress}
        >
          <Animated.View style={[styles.tile, pressBeat]}>
            <Animated.View style={[styles.tileContent, markedOpacity]} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Tile;
