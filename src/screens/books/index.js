import {View, FlatList, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Input from 'components/input/input';
import Button from 'components/button';
import Book from 'components/book';
import useStyles from './style';
import axios from 'axios';
import {DotIndicator} from 'react-native-indicators';

export default function index() {
  const [searchedKey, setsearchedKey] = useState('');
  const [bookList, setbookList] = useState([]);
  const [loading, setloading] = useState(false);
  const [pagination, setpagination] = useState(0);
  const styles = useStyles();

  const getBooks = query => {
    setloading(true);
    setbookList([]);
    setpagination(0);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${pagination}&key=AIzaSyCJFy4ODbh9_Ff1Wg573z1nGsK0oK0hYhY`,
      )
      .then(response => {
        if (response.status === 200) {
          setbookList(response.data.items);
          setloading(false);
        }
      })
      .catch(error => {
        setloading(false);
      });
  };

  useEffect(() => {
    setloading(true)
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchedKey}&startIndex=${pagination}&key=AIzaSyCJFy4ODbh9_Ff1Wg573z1nGsK0oK0hYhY`,
      )
      .then(response => {
        if (response.status === 200) {
          setbookList(prevBookList => [...prevBookList, ...response.data.items]);
          setloading(false)
        }
      })
      .catch(error => {
        setloading(false)
      });
  }, [pagination]);
  return (
    <View style={{paddingHorizontal: 10, flex: 1}}>
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

        <Button title="Search" onPress={() => getBooks(searchedKey)} />
      </View>
      <View style={{width: '100%', alignItems: 'flex-end'}}>
        <Text>total items:{bookList.length}</Text>
      </View>

      <FlatList
        data={bookList}
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10}}
        renderItem={({item, index}) => (
          <Book
            title={item.volumeInfo.title}
            thumbnail={
              'https' + item?.volumeInfo?.imageLinks?.thumbnail.substr(4)
            }
            author={
              Array.isArray(item?.volumeInfo?.authors)
                ? item?.volumeInfo?.authors.map(item => item).join(', ')
                : item?.volumeInfo?.authors
            }
            price={
              item?.saleInfo?.listPrice?.amount === 0
                ? 'Gratuit'
                : item?.saleInfo?.listPrice
                ? `${item?.saleInfo?.listPrice?.amount}$`
                : null
            }
            link={item.volumeInfo.infoLink}
          />
        )}
        ListEmptyComponent={() => (
          <>
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Image
                source={require('../../assets/img/empty.png')}
                style={{width: 300, height: 300}}
                resizeMode="contain"
              />
              {loading ? (
                <DotIndicator
                  color={'#8C71E4'}
                  count={3}
                  size={5}
                  animationDuration={500}
                />
              ) : (
                <Text>Commencez votre recherche</Text>
              )}
            </View>
          </>
        )}
      />

      {bookList.length > 0 && (
        <Button
          style={{width: '100%', marginTop: 10}}
          title="Load More"
          loading={loading}
          onPress={() => setpagination(pagination + 10)}
        />
      )}
    </View>
  );
}
