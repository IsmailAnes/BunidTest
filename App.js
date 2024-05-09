import {View, SafeAreaView} from 'react-native';
import Books from 'screens';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Books />
      </View>
    </SafeAreaView>
  );
}
