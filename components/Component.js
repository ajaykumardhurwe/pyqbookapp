import { useState } from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';

// import { useNavigation } from "@react-navigation/native";

const CardComponent = ({ title, description, imageUrl, navigation}) =>
  
  
  
  // export default CardComponent({ title, description, imageUrl, navigation}) 
  {

  const [expanded, setExpanded] = useState(false);
   

  return (
    <Card containerStyle={styles.card}>
      <Card.Title>{title}</Card.Title>
      <Card.Image source={{ uri: imageUrl }} style={styles.image} />
      <Button
        title={expanded ? 'Hide Description' : 'Show Description'}
        onPress={() => setExpanded(!expanded)}
        buttonStyle={styles.button}
      />
      

{expanded && <Text style={styles.description}>{description}</Text>}


    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
  },
  image: {
    height: 200,
  },
  button: {
    borderRadius: 5,
    marginTop: 10,
  },
  description: {
    marginTop: 10,
  },
});

export default CardComponent;
