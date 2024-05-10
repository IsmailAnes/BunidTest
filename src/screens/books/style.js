import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
export default styles = () =>
  StyleSheet.create({
    inputContainer: {
        width: '70%',
      },
      searchContainer: {
        flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
      }
  });
