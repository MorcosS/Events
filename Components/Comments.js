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
    TextInput,
    Dimensions,
    Button,
    FlatList,
    AsyncStorage
} from 'react-native';
import Colors from 'HSColors'
var CommentsList = []  //our List of Comments
var myComment;

export default class Comments extends Component {
    static navigationOptions = {
        tabBarLabel: 'Comments',
    };

    componentWillMount() {
        CommentsList = [];
        this.getData();
    }

    async getData() {
        try {
            //getting data from the database
            const value = await AsyncStorage.getItem('@MyComments:key');
            if (value !== null) {
                // We have data!!
                console.log(value);
                CommentsList = JSON.parse(value);
                this.forceUpdate()
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    async onPostComment() {
        // save my Comment in a variable
        myComment = { text: myComment.text, date: new Date() }
        try {
            //make sure Comments List is not undefined
            if (CommentsList === undefined || CommentsList === null) {
                CommentsList = [];
            }
            CommentsList.push(myComment);
            //adding the new item to the database
            await AsyncStorage.setItem('@MyComments:key', JSON.stringify(CommentsList));
            // update my scene to include the new comment
            this.getData()
        } catch (error) {
            // Error saving data
            console.log(error)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    //the list that carries our comments
                }
                <FlatList
                    data={CommentsList}
                    renderItem={({ item }) => 
                    <View style={styles.list} >
                    <Text style={styles.textStyle} >{item.text}</Text>
                    <Text>{(new Date(item.date)).toDateString()}</Text>
                    </View>}
                />
                <TextInput
                    editable={true}
                    maxLength={40}
                    onChangeText={(value) => myComment = { text: value }}
                />
                <Button
                    onPress={this.onPostComment.bind(this)}
                    title="Post a Comment"
                    color={Colors.azure}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    list:{
        height:60
    },
    textStyle:{
        color:'black',
        fontSize:20
    }
});