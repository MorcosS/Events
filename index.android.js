/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './index.js' // this is  a component for the main menu in order for ios and android to be the same
export default class MapsProject extends Component {
  render() {
    return (
     <App />    //return the main app compnent for android and ios
    );
  }
}

AppRegistry.registerComponent('MapsProject', () => MapsProject);
