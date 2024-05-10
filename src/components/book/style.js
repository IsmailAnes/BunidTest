import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default styles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 170,
      backgroundColor: '#F3F3F3',
      borderTopLeftRadius: RFValue(5, 800),
      borderTopRightRadius: RFValue(5, 800),
      borderBottomLeftRadius: RFValue(5, 800),
      borderBottomRightRadius: RFValue(5, 800),
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 1,
    },
    title: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    author: {
      color: 'gray',
      fontWeight: '600',
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    cardInfo: {
      width: '70%',
      height: '100%',
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: 'space-between',
    },
    btnContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
