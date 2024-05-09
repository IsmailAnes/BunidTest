import {View, Text, Dimensions, Image, FlatList} from 'react-native';
import React from 'react';
import Button from 'components/button';
import useStyles from './style';

export default function index(props) {
    const {title, author, price, link, thumbnail} = props
  const {height} = Dimensions.get('screen').height;
  const {width} = Dimensions.get('screen').width;
  const styles = useStyles(height, width);
  return (
    <View style={styles.container}>
      <View style={{width: '30%', height: '100%'}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          source={{uri:thumbnail}}
        />
      </View>
      <View style={{width: '70%', height: '100%',
       paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between'}}>
        <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        </View>
        <View style={{width:'100%', flexDirection:'row',justifyContent:'space-between'}}>
        <Button outlined small title={price} />
        <Button outlined title={link} />
        </View>
      </View>
    </View>
  );
}
