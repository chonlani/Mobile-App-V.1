// // import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// // import { StackNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigator-tabs';
// import { lonicons } from '@expo/vector-icons'

// import LoadingScreen from './screens/LoadingScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import HomeScreen from './screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen';



// import * as firebase from 'firebase';
// import { create } from 'react-test-renderer';
// var firebaseConfig = {
//   apiKey: "AIzaSyB95y7CvFYb9F8Rzqe5rZrFrS80ig31Oow",
//   authDomain: "socialapp-8dbd5.firebaseapp.com",
//   databaseURL: "https://socialapp-8dbd5.firebaseio.com",
//   projectId: "socialapp-8dbd5",
//   storageBucket: "socialapp-8dbd5.appspot.com",
//   messagingSenderId: "1005951282628",
//   appId: "1:1005951282628:web:58779728d2c5a384a3c891",
//   measurementId: "G-Y58CEM9YG4"
// };

// firebase.initializeApp(firebaseConfig);

// const AppStack = createStackNavigator({
//     Home: HomeScreen
// });

// const AuthStack = createStackNavigator({
//     Login: LoginScreen,
//     Register: RegisterScreen
// });


// export default createAppContainer(
//     createSwitchNavigator(
//         {
//             Loading: LoadingScreen, 
//             App: AppStack,
//             Auth: AuthStack
//         },
//         {
//             initialRouteName: "Loading"
//         }
//     )
// );


import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PostScreen from './screens/PostScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';

import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB95y7CvFYb9F8Rzqe5rZrFrS80ig31Oow",
      authDomain: "socialapp-8dbd5.firebaseapp.com",
      databaseURL: "https://socialapp-8dbd5.firebaseio.com",
      projectId: "socialapp-8dbd5",
      storageBucket: "socialapp-8dbd5.appspot.com",
      messagingSenderId: "1005951282628",
      appId: "1:1005951282628:web:58779728d2c5a384a3c891",
      measurementId: "G-Y58CEM9YG4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const AppContainer = createStackNavigator({
//   default: createBottomTabNavigator(
//     {
//       Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
//         }
//       },
//       Message: {
//         screen: MessageScreen,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
//         }
//       },
//       Post: {
//         screen: PostScreen,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => (
//             <Ionicons
//               name="ios-add-circle"
//               size={48}
//               color="#E9446A"
//               style={{
//                 shadowColor: "#E9446A",
//                 shadowOffset: { width: 0, height: 0 },
//                 shadowRadius: 10,
//                 shadowOpacity: 0.3
//               }}
//             />
//           )
//         }
//       },
//       Notification: {
//         screen: NotificationScreen,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
//         }
//       },
//       Profile: {
//         screen: ProfileScreen,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
//         }
//       }
//     },
//     {
//       defaultNavigationOptions: {
//         tabBarOnPress: ({ navigation, defaultHandler }) => {
//           if (navigation.state.key === "Post") {
//             navigation.navigate("postModal")
//           } else {
//             defaultHandler()
//           }
//         }
//       },
//       tabBarOptions: {
//         activeTintColor: "#161F3D",
//         inactiveTintColor: "#B8BBC4",
//         showLabel: false
//       }
//     }
//   ),
//     postModal: {
//     screen: PostScreen
//     }
//   },
//   {
//     mode: "modal",
//     headerMode: "none",
//    // initialRouteName: "postModal"
//   }
// )
// const AuthStack = createStackNavigator({
//   Login: LoginScreen,
//   Register: RegisterScreen
// },{
//   initialRouteName: "Register"
// }
// );
// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Loading: LoadingScreen,
//       App: AppContainer,
//       Auth: AuthStack
//     },
//     {
//       initialRouteName: "Loading"
//     }
//   )
// )
const AppStack = createStackNavigator({
  Home: HomeScreen
});
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)
































// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>
//         Hello World
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
   
//   },
// });
