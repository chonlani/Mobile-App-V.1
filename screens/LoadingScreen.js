// import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';
// import * as firebase from 'firebase'
// import React from 'react'

// export default class LoadingScreen extends React.Component {
//     componentDidMount() {
//         firebase.auth().onAuthStateChanged(user => {
//             this.props.navigation.navigate(user ? 'App' : 'Auth')
//         })
//     }


//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Loading...</Text>
//                 <ActivityIndicator size='large'></ActivityIndicator>
                
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });

// export default LoadingScreen


import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase';
import Fire from "../Fire";  
export class LoadingScreen extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            this.props.navigation.navigate(user ? "App" : "Auth")
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Loading...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        )
    }
}
export default LoadingScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
