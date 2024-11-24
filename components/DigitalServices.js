
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking, Alert, ScrollView } from 'react-native';
import { Card, Button, Provider as PaperProvider } from 'react-native-paper';
// import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import QuestionForm from '../components/QuestionForm';


const data = [
  {
    id: '1',
    title: 'e-choice     centre',
    image: require('../assets/images/services1.png'),
    // moreInfo: 'This e-choice centre aimed at providing various digital and e-governance services to rural and urban areas through localized centers.',
    link: 'https://ajaykumardhurwe.github.io/pyqbook/',
  },
  {
    id: '2',
    title: 'Mentorship Program',
    image: require('../assets/images/services2.png'),
    // moreInfo: 'A Mentorship Program is a structured initiative where experienced individuals (mentors) provide guidance, advice, and support to less experienced individuals (mentees) to help them grow personally and professionally.',
    link: 'https://ajaykumardhurwe.github.io/pyqbook/',
  },
  {
    id: '3',
    title: 'Photo & Video Editing',
    image: require('../assets/images/services3.png'),
    // moreInfo: 'Providing digital photo and video editing services involves offering professional expertise to enhance, modify, or transform images and video content for individuals, businesses, or organizations.',
    link: 'https://ajaykumardhurwe.github.io/pyqbook/',
  },


  // {
  //   id: '4',
  //   title: 'Box 4',
  //   image: require('../assets/images/3.png'),
  //   moreInfo: 'This is more info about Box 3.',
  //   link: 'https://example.com/box3',
  // },
  // {
  //   id: '5',
  //   title: 'Box 3',
  //   image: require('../assets/images/3.png'),
  //   moreInfo: 'This is more info about Box 3.',
  //   link: 'https://example.com/box3',
  // },
  // {
  //   id: '6',
  //   title: 'Box 3',
  //   image: require('../assets/images/3.png'),
  //   moreInfo: 'This is more info about Box 3.',
  //   link: 'https://example.com/box3',
  // },
];

export default function App() {
  const [expandedCard, setExpandedCard] = useState(null);

  const renderBox = ({ item, index }) => {
    const isExpanded = expandedCard === index;

    return (

<>


<Card style={styles.card}>
        <TouchableOpacity onPress={() => setExpandedCard(isExpanded ? null : index)}>
          <Image source={item.image} style={styles.thumbnail} />
          <Card.Content>
            <Text style={styles.title}>{item.title}</Text>
          </Card.Content>
          <Card.Actions>
            <Button>{isExpanded ? 'Hide Info' : 'Learn More'}</Button>
          </Card.Actions>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.dropdown}>
            <Text>{item.moreInfo}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>Visit Link</Text>
            </TouchableOpacity>
          </View>
        )}
      </Card>
</>
    );
  };



    const openWhatsApp = () => {
    let phoneNumber = "-919301084259"; // Replace with the recipient's phone number in international format
    let text = "Hello, this is a test message";
    let url = `whatsapp://send?phone=${phoneNumber}&text=${text}`;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert('WhatsApp is not installed on your device');
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };



  return (
    <PaperProvider>
      
      <ScrollView style={styles.container}>
      {/* < QuestionForm  style={styles.fixit}></QuestionForm> */}
      {/* <Fontisto name="whatsapp" size={44} color="black" onPress={openWhatsApp} style={styles.whatsapp} /> */}
      <View >
      {/* <Text style={styles.inst}>Contact for this services</Text> */}
        <Text style={styles.screenTitle}>
          {/* Contact us for this services */}
          </Text>
        <FlatList
          data={data}
          renderItem={renderBox}
          horizontal
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.horizontalList}
        />
      </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    paddingTop: 0,
    paddingHorizontal: 10,
  },
  fixit:{
marginRight: "auto"
  },

  whatsapp:{
textAlign: "center",
backgroundColor: "white",

  },

  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
   color: 'red',
textShadowRadius: '55',
   textShadowColor:'black',
  },
  horizontalList: {
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 55,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dropdown: {
    padding: 1,
    backgroundColor: '#f0f0f0',
  },
  link: {
    color: '#007BFF',
    marginTop: 0,
    fontWeight: 'bold',

  },
});


