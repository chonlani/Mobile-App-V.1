import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import ReactDOM from 'react-dom'
// import { Card, Icon } from 'react-native-elements';
// import {
//     FlatList,
//     Image,
//     ImageBackground,
//     Linking,
//     Platform,
//     ScrollView,
//     StyleSheet,
//     Text,
//     View,
//   } from 'react-native'



export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.Example}>
                <Text> Profile Screen </Text>
               
            </View>

           
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }


})
