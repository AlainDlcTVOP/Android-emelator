import React, { Component, useState, useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// "https://rallycoding.herokuapp.com/api/music_albums"
// just for testing the key
const apikey = 'apikey=MzY4ZGJjYmUtMzNmZi00YjliLWIwNGEtZDg2NTJhM2Q0MzM0';
const trackList = 'https://api.napster.com/v2.1/tracks/top?';
class AlbumList extends Component {
    state = { albums: [] };
    componentDidMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({ albums: response.data }));
    }
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} record={album} />
        );
    }
    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}
export default AlbumList;