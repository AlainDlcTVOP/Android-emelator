import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


// just for testing the key
const apikey = 'apikey=MzY4ZGJjYmUtMzNmZi00YjliLWIwNGEtZDg2NTJhM2Q0MzM0';
const trackList = 'https://api.napster.com/v2.1/tracks/top?';

class AlbumList extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            albums: []
        })
    }

    UNSAFE_componentWillMount() {
        axios.get(trackList + apikey)
            .then((response) => this.setState({ albums: response.data }));

    }

    renderAlbums() {

        return (

            this.state.albums.map(album =>
                <Text key={album.tracks}>{album.tracks}</Text>
            )
        );

    }


    render() {

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}


export default AlbumList;