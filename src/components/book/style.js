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
    },
    title:{
        fontWeight:'bold',
        marginBottom:5
    },
    author:{
        color:'gray',
        fontWeight:'600'
    }
  });
