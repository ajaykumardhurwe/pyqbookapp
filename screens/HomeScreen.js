// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Linking, Button } from 'react-native';
// import CourseScreen from './ClassScreen';
// import PostScreen from '../components/PostScreen'
// import HomeComponent from '../components/HomeComponent'
// import Services from '../components/Services'
// import ClassComponent from '../components/ClassComponent'
// const { width: screenWidth } = Dimensions.get('window');
// const CardScreen = () => {
//        return (
//         <ScrollView style={styles.container}>
//            <ClassComponent></ClassComponent>
//              <PostScreen ></PostScreen>
//                <HomeComponent></HomeComponent>
//                <Services></Services>
//  {/* <CourseScreen></CourseScreen> */}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
   
//         flex: 1,
//         backgroundColor: '#f4f4f4',
//         padding: .0,
//     },
   
// });

// export default CardScreen;

// ///

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ClassComponent from '../components/ClassComponent';
import PostScreen from '../components/PostScreen';
import HomeComponent from '../components/HomeComponent';
import Services from '../components/Services';

const CardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ClassComponent />
      <PostScreen />
      <HomeComponent />
      <Services />
      {/* <CourseScreen /> Uncomment this line if you need to render the CourseScreen */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    // padding: 0 is removed since it's not necessary
  },
});

export default CardScreen;
