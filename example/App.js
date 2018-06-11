/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
require('node-libs-react-native/globals');

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
 const createClient = require('hafas-client')
 const dbProfile = require('hafas-client/p/db')
 const client = createClient(dbProfile)


const münchenHbf = {
  type: 'station',
  id: '008000261',
  name: 'München Hbf',
  locations: {
    type: 'location',
    latitude:48.140364,
    longitude:11.558735
  }
}

const münchenPassing = {
  type: 'station',
  id: '008004158',
  name: 'München-Pasing',
  locations: {
    type: 'location',
    latitude:48.150036,
    longitude:11.461624
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    client.journeys(münchenHbf, münchenPassing)
    .then((response)=>{
      console.log('===============response=====================');
      console.log(response);
      console.log('====================================');

    })
    .catch(console.error)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
