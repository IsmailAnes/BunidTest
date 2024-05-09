import {View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Input from 'components/input/input';
import Button from 'components/button';
import Book from 'components/book';
import useStyles from './style';
import axios from 'axios';

export default function index() {
  const [searchedKey, setsearchedKey] = useState('');
  const [bookList, setbookList] = useState([]);
  const styles = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=play&key=AIzaSyCJFy4ODbh9_Ff1Wg573z1nGsK0oK0hYhY`,
      )
      .then(response => {
        if (response.status === 200) {
          setbookList(response.data.items);
        }
      })
      .catch(error => {
        console.warn('error');
      });
  }, []);
  return (
    <View style={{paddingHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
        }}>
        <View style={styles.inputContainer}>
          <Input sty onChangeText={value => setsearchedKey(value)} />
        </View>

        <Button title="Search" />
      </View>
      <FlatList
        data={bookList}
        bounces={false}
        style={{marginTop: 10}}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Book title={item.volumeInfo.title} 
          thumbnail={item.volumeInfo.imageLinks.thumbnail}
          author={item.volumeInfo.authors} 
           />
        )}
      />
    </View>
  );
}
