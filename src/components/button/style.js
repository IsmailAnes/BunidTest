import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
export default styles = ( outlined, large, small, fullWidth) =>
  StyleSheet.create({
    container: {
      padding:10,
      backgroundColor: outlined
        ? 'transparent'
        : '#8C71E4',
      borderTopLeftRadius: RFValue(10, 800),
      borderTopRightRadius: RFValue(10, 800),
      borderBottomLeftRadius: RFValue(10, 800),
      borderBottomRightRadius: RFValue(10, 800),
      borderWidth: outlined ? 1 : 0,
      borderColor: outlined ? '#8C71E4' : 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    text: {
      color: outlined ? '#8C71E4' : 'white',
      fontSize: RFValue(15, 800),
      textAlign: 'center',
    },
    iconImg: {
      height: RFValue(20, 800),
      width: RFValue(20, 800),
    },
  });
