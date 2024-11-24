import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const carouselData = [
  {
    id: '1',
    title: 'SSC',
    description: 'SSC Exam-related content is coming soon.',
    image: require('../assets/images/sscImage.jpg'),
  },
  {
    id: '2',
    title: 'CGPSC',
    description: 'CGPSC Exam-related content is coming soon.',
    image: require('../assets/images/cgpscImage.png'),
  },
  {
    id: '3',
    title: 'UPSC',
    description: 'UPSC Exam-related content is coming soon.',
    image: require('../assets/images/upscImage.jpg'),
  },
];

const CarouselScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Image Carousel</Text> */}
      <FlatList
        data={carouselData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 8,
    marginHorizontal: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 300, // Adjust card width
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default CarouselScreen;
