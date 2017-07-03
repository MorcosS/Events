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
    View,
    Button
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places'; //Place Picker Modal for picking a place.
import MapView from 'react-native-maps'; //is used as a constant MapView.
import Colors from 'HSColors'  //a coloring object that includes all app colors.

export default class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // initial region for viewing before picking a place.
            region: {
                latitude: 40.690518,
                longitude:-74.046507,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
        };
    }


    static navigationOptions = {
        tabBarLabel: 'Location',
    };


    //on Press function for opening place picker modal
    onSetLocation() {
        RNGooglePlaces.openPlacePickerModal()
            .then((place) => {
                console.log(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
                this.setState({region:{
                latitude: place.latitude,
                longitude: place.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }})
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    //constant map view with inial region with a marker to mark the location
                }
                <MapView
                    style={styles.map}
                    region={this.state.region}
                >
                    <MapView.Marker draggable
                        coordinate={this.state.region}
                        onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
                    />
                </MapView>
                {
                    //add a button for setting a location.
                }
                <Button
                    onPress={this.onSetLocation.bind(this)}
                    title="Pick a Location"
                    color={Colors.azure}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
