import React, { useState } from 'react';
import HomeComponent from '../components/HomeComponent'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ClassScreen = () => {
    return (
        <ScrollView style={styles.container}>
          
            <HomeComponent></HomeComponent>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
});

export default ClassScreen;
