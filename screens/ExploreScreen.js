

// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import ScrollViewWithHorizontalButtons from '../components/ScrollViewWithHorizontalButtons';
// export default function App() {
//   return (
//     <View style={styles.container}>
//     <ScrollViewWithHorizontalButtons></ScrollViewWithHorizontalButtons>
   
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });


// //////


import React from 'react'; 
import { StyleSheet, View, Text } from 'react-native';
import ScrollViewWithHorizontalButtons from '../components/ScrollViewWithHorizontalButtons';  // Assuming this is a custom component

export default function App() {
  return (
    <View style={styles.container}>
      {/* Ensure that ScrollViewWithHorizontalButtons doesn't have strings outside of Text components */}
      <ScrollViewWithHorizontalButtons />
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
