
import React, { useRef } from 'react';
import PostComponent from './PostScreen';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const sections = [
  { id: '1', title:'video editting',
    // 'Video Editting' , 
    color: 
    // <PostComponent></PostComponent>
    '#ff8a80' ,
    service: <PostComponent></PostComponent>
   },
  { id: '2', name:'contact', title: 'Section 2', color: '#80d8ff', service: <PostComponent></PostComponent> },
  { id: '3', title: 'Section 3', color: '#ccff90',service: <PostComponent></PostComponent> },
  { id: '4', title: 'Section 4', color: '#ffd180',service: <PostComponent></PostComponent> },
  { id: '5', title: 'Section 5', color: '#ffab91',service: <PostComponent></PostComponent> },
];

const ScrollViewWithHorizontalButtons = () => {
  const scrollRef = useRef(null);

  // Scroll to a specific section
  const scrollToSection = (index) => {
    scrollRef.current?.scrollTo({
      y: index * 400, // Adjust height for each section
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      {/* Horizontal Buttons Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.buttonContainer}
      >
        {sections.map((section, index) => (
          <TouchableOpacity
            key={section.id}
            style={styles.button}
            onPress={() => scrollToSection(index)}
          >
            <Text style={styles.buttonText}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Scrollable Sections */}
      <ScrollView ref={scrollRef} style={styles.scrollContainer}>
        {sections.map((section) => (
          <View
            key={section.id}
            style={[styles.section, { backgroundColor: section.color }]}
          >
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    paddingTop:0,

  },
  button: {
    backgroundColor: '#6200ea',
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  // scrollContainer: {
  //   flex: 1,
  //   marginTop: 10,
  // },
  section: {
    height: 400, // Each section has the same height
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 5,
    elevation: 2,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ScrollViewWithHorizontalButtons;
