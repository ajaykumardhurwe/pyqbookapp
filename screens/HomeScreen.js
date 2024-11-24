import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Linking, Button } from 'react-native';
import CourseScreen from './ClassScreen';
import PostScreen from '../components/PostScreen'
import HomeComponent from '../components/HomeComponent'
import Services from '../components/Services'
import ClassComponent from '../components/ClassComponent'
const { width: screenWidth } = Dimensions.get('window');
const CardScreen = () => {
       return (
        <ScrollView style={styles.container}>
           <ClassComponent></ClassComponent>
             <PostScreen ></PostScreen>
               <HomeComponent></HomeComponent>
               <Services></Services>
 {/* <CourseScreen></CourseScreen> */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
   
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: .0,
    },
   
});

export default CardScreen;
