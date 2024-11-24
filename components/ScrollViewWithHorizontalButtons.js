import React, { useRef } from 'react';
import { Video } from 'expo-av';
import DigitalServices from './DigitalServices';
import Services from './Services';
import CourseralComponent from '../components/CourseralComponent'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const sections = [
  { id: '1', title: 'Digital Services',
    //  color: '#ff8a80', 
     service: <DigitalServices /> },
  { id: '2', title: 'Upcoming Services', 
    // color: '#80d8ff', 
    service: <Services /> },
  { id: '3', title: 'Government Job', 
    // color: '#ccff90', 
    service: <CourseralComponent></CourseralComponent> },

  // { id: '4', title: 'Section 4', 
  //   // color: '#ffd180', 
  //   service: <DigitalServices /> },
  // { id: '5', title: 'Section 5', 
  //   // color: '#ffab91', 
  //   service: <DigitalServices /> },
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
      {/* Background Video */}
      <Video
        source={require('../assets/videos/backgroundVideo.mp4')} // Replace with your video file path
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
        rate={1.0}
        volume={1.0}
      />

      {/* Overlay Content */}
      <View style={styles.overlay}>
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
        <ScrollView ref={scrollRef} style={styles.scrollToSection}>
          {sections.map((section) => (
            <View
              key={section.id}
              style={[styles.section, { backgroundColor: section.color }]}
            >
              <Text style={styles.sectionText}>{section.service}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    opacity: 0.4, // Set opacity to 40%
  },
  overlay: {
    flex: 1, // Content overlaid on the video
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    paddingTop: 0,
  },
  button: {
    backgroundColor: '#fa0202',
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
  section: {
    height: 350, // Each section has the same height
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

