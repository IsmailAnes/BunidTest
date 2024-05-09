import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
export default styles = ( outlined, large, small) =>
  StyleSheet.create({
    container: {
      width: large ? RFValue(50, 800) : RFValue(90, 800),
      height: small ? RFValue(50, 800) : RFValue(45, 800),
      backgroundColor: outlined
        ? 'transparent'
        : '#8C71E4',
      borderTopLeftRadius: RFValue(25, 800),
      borderTopRightRadius: RFValue(25, 800),
      borderBottomLeftRadius: RFValue(25, 800),
      borderBottomRightRadius: RFValue(25, 800),
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
