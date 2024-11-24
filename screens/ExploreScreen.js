

import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScrollViewWithHorizontalButtons from '../components/ScrollViewWithHorizontalButtons';
export default function App() {
  return (
    <View style={styles.container}>
    <ScrollViewWithHorizontalButtons></ScrollViewWithHorizontalButtons>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


//////
