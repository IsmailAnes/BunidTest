import {View, TextInput} from 'react-native';
import React from 'react';
import useStyles from './style';

export default function Input(props) {
  const {rightIcon, style,inputStyle, ...rest} = props;
  const styles = useStyles();
  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...rest}
        style={[styles.input, inputStyle]}
        placeholderTextColor={'#8C71E4AA'}
        placeholder='Lancez votre recherche...'
      />
    </View>
  );
}
