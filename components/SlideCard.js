// components/SlideCard.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width: screenWidth } = Dimensions.get('window');

const SlideCard = ({ video }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{video.title}</Text>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${video.videoId}` }}
      />
      <Text style={styles.description}>{video.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
    marginBottom: 20,
    width: screenWidth * 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  video: {
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default SlideCard;
