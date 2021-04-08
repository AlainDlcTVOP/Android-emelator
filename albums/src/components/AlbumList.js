import React, { Component } from 'react';
import { View, Text } from 'react-native';


// just for testing the key
const apikey = 'apikey=MzY4ZGJjYmUtMzNmZi00YjliLWIwNGEtZDg2NTJhM2Q0MzM0';
const trackList = 'https://api.napster.com/v2.1/tracks/top?';

class AlbumList extends Component {

    state = { albums: [] };

    UNSAFE_componentWillMount() {
        fetch(trackList + apikey)
            .then((response) => response.json())
            .then((responseData) => this.setState({ albums: responseData }));

    }
    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}


export default AlbumList;