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
import { TabNavigator } from 'react-navigation' // Tab Navigator used for switching between apps.
import Comments from './Components/Comments'  //importing comments screen.
import Location from './Components/Location'  //importing Location screen.
import Colors from 'HSColors'  //a coloring object that includes all app colors.

const MainMenu = TabNavigator({
    Comments: {
        screen: Comments, //Comments tab scene screne
    },
    Location: {
        screen: Location, //Location tab scene screen
    },
}, {
        tabBarOptions: {
            upperCaseLabel: false,
            indicatorStyle: {
                backgroundColor: Colors.duck_egg_blue
            },
            activeTintColor: Colors.duck_egg_blue,
            inactiveTintColor: Colors.duck_egg_blue,
            labelStyle: {
                fontWeight: 'bold',
            },
        },
    });


export default class App extends Component {
    render() {
        return (
            <MainMenu />
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