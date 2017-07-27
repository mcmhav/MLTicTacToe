import React, { Component, PropTypes } from 'react';
import {
  Text,
  Modal,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './styles';

class WinView extends Component {
  static propTypes = {
    victor: PropTypes.number,

    // dispatchers:
    reset: PropTypes.func,
  }

  static defaultProps = {}

  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(1),
      rotate: new Animated.Value(1),
    };

    this.animate = this.animate.bind(this);

    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animateSize(toValue, duration = 200) {
    return Animated.timing(this.state.size, {
      toValue, duration,
    });
  }

  animate() {
    Animated.sequence([
      this.animateSize(1),
      this.animateSize(2),
    ]).start(this.animate);
  }

  close() {
    this.props.reset();
  }

  render() {
    const { victor } = this.props;

    const { size } = this.state;
    const winAnimation = {
      transform: [{
        scale: size,
      }],
    };

    return (
      <Modal
        animationType="slide"
        hardwareAccelerated
        onRequestClose={this.close}
      >
        <TouchableWithoutFeedback
          onPress={this.close}
        >
          <Animated.View
            style={[
              styles.container,
              winAnimation,
            ]}
          >
            <Text>
              {`WINNER ${victor}`}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default WinView;
