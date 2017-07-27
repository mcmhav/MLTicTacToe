import { StyleSheet, Dimensions } from 'react-native';
import { defaultSpace } from '../../../../styles';

const { width } = Dimensions.get('window');
const TILE_SIZE = (width / 3) - (defaultSpace * 3);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    height: TILE_SIZE,
    width: TILE_SIZE,
    backgroundColor: 'red',
  },
  tileContent: {
    backgroundColor: 'green',
    flex: 1,
    margin: defaultSpace,
  },
});

export default styles;
