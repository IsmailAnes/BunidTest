/**
 * © 2022 The Project My GAT
 * Authors Reactit
 *
 */

import {TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {DotIndicator} from 'react-native-indicators';
import useStyles from './style';

export default function Button(props) {
  const {
    title,
    outlined,
    white,
    large,
    style,
    icon,
    loading,
    small,
    ...rest
  } = props;
  const styles = useStyles(outlined, white, large, small);
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      {...rest}>
      {icon && (
        <Image
          source={icon}
          style={[styles.iconImg, {marginRight: title ? 10 : 0}]}
          resizeMode={'contain'}
        />
      )}
      {loading ? (
        <DotIndicator
          color={'white'}
          count={3}
          size={5}
          animationDuration={500}
        />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
