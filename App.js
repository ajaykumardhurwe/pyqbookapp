import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import ClassScreen from './screens/ClassScreen';
import MockTestScreen from './screens/MockTestScreen';
import ExploreScreen from './screens/ExploreScreen';
import PostScreen from './screens/PostScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home"> */}
        
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Class') {
              iconName = focused
                ? 'people-circle-outline'
                : 'people-circle-outline';
            } else if(route.name=='MockTest'){
              iconName = focused
              ? 'document'
              : 'document-text-outline'
            } else if(route.name=='Post'){
              iconName = focused
              ? 'add-circle-outline'
              : 'add-circle-outline'
            } else if(route.name=='Explore'){
              iconName = focused
              ? 'grid-outline'
              : 'grid-outline'
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',

          "tableStyle":[
           {
            "display": "flex",
           },
           null
          ]

        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Class" component={ClassScreen} />
       
        <Tab.Screen name="Post" component={PostScreen}></Tab.Screen>
        <Tab.Screen name="MockTest" component={MockTestScreen}></Tab.Screen>
        <Tab.Screen name="Explore" component={ExploreScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}






// ////////////


// import React from 'react';
// import { StyleSheet, View, Button, Linking, Alert, Image } from 'react-native';

// export default function App() {
//   const openWhatsApp = () => {
//     let phoneNumber = "+919301084259"; // Replace with the recipient's phone number in international format
//     let text = "Hello, this is a test message";
//     let url = `whatsapp://send?phone=${phoneNumber}&text=${text}`;
//     Linking.openURL(url)
//       .then((supported) => {
//         if (!supported) {
//           Alert.alert('WhatsApp is not installed on your device');
//         }
//       })
//       .catch((err) => console.error('An error occurred', err));
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('./assets/logo.png')} style={styles.logo} />
//       <Button title="Chat on WhatsApp" onPress={openWhatsApp} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
// });
