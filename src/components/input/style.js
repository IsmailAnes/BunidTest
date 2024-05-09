import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
export default styles = () =>
  StyleSheet.create({
    container: {
      width:'100%' ,
      backgroundColor: '#F3F3F3',
      borderWidth: 0.4,
      borderColor: 'transparent',
      borderTopLeftRadius: RFValue(25, 800),
      borderTopRightRadius: RFValue(25, 800),
      borderBottomLeftRadius: RFValue(25, 800),
      borderBottomRightRadius: RFValue(25, 800),
      paddingLeft: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      overflow: 'hidden',
    },
    input: {
      flex: 1,
      minHeight: RFValue(55, 800),
      maxHeight: RFValue(90, 800),
      //fontFamily: fonts.regular,
      fontSize: RFValue(14, 800),
      color: 'blue',
    },
  });
