// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import MCQTest from '../components/MCQTest';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MCQTest />
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



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, FlatList, ScrollView } from 'react-native';
import H1 from '../components/H1'; // Make sure to import the H1 component
import MockTestScreen from '../screens/MockTestScreen'
import MCQTest from '../components/mcqtest/BasicComputerMt'
import SscMt from  '../components/mcqtest/SscMt' 
import CgpscMt from '../components/mcqtest/CgpscMt'
import RrbMt from '../components/mcqtest/RrbMt'
import UpscMt from '../components/mcqtest/UpscMt'
import ScrollViewWithHorizontalButtons from '../components/ScrollViewWithHorizontalButtons';
// Import static image
const staticImage = require('../assets/icon.png'); // Update the path as per your folder structure
const bcImage = require('../assets/images/basicComputer.png')
const sscImage = require('../assets/images/sscImage.jpg')
const cgpscImage = require('../assets/images/cgpscImage.png')
const rrbImage = require('../assets/images/rrbImage.png')
const upscImage = require('../assets/images/upscImage.jpg')


export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: 'Basic Computer',
      details: <MCQTest></MCQTest>,
      // 'Welcome to Our Exceptional Room Service Experience At Ajey World...',
      icon: bcImage, // Use static image here
      link: 'https://forms.gle/cWPiSEcdWNgA4ore9',
    },
    {
      name: 'SSC',
      details: <SscMt></SscMt> ,
    //   'Welcome to Ajey World, where your business meets limitless possibilities...',
      icon: sscImage, // Use static image here
      link: 'https://forms.gle/UJYHCmYXtPVuMxoj9',
    },
    // Add more categories as needed
    {
      name: 'CGPSC',
      details: <CgpscMt></CgpscMt>,
    //   'Welcome to Ajey World, where your business meets limitless possibilities...',
      icon: cgpscImage, // Use static image here
      link: 'https://forms.gle/UJYHCmYXtPVuMxoj9',
    },
  {
      name: 'Railway',
      details: <RrbMt></RrbMt>,
    //   'Welcome to Ajey World, where your business meets limitless possibilities...',
      icon: rrbImage, // Use static image here
      link: 'https://forms.gle/UJYHCmYXtPVuMxoj9',
    },
    {
      name: 'UPSC',
      details: <UpscMt></UpscMt>,
    //   'Welcome to Ajey World, where your business meets limitless possibilities...',
      icon: upscImage, // Use static image here
      link: 'https://forms.gle/UJYHCmYXtPVuMxoj9',
    },

  ];

  const handlePress = (category) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box} onPress={() => handlePress(item)}>
      <Image source={item.icon} style={styles.icon} /> {/* Use item.icon for static image */}
      <Text style={styles.boxText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <H1>Our Mock Test</H1>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />
        <View style={styles.contentContainer}>
          {selectedCategory ? (
            <View>
              <H1>{selectedCategory.name}</H1>
              <Text style={styles.contentText}>{selectedCategory.details}</Text>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(selectedCategory.link)}
              >
                Enroll for  {selectedCategory.name} mock test
              </Text>
            </View>
          ) : (
            <Text style={styles.contentText}>
              Select a category to see details
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  flatList: {
    paddingHorizontal: 10,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 150,
    height: 150,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  icon: {
    width: 130,
    height: 100,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    minWidth: 300,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 70,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
