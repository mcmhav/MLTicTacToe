import { StyleSheet } from 'react-native';
import { defaultSpace } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'space-around',
    paddingVertical: defaultSpace,
  },
  tileRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: defaultSpace,
  },
});

export default styles;
