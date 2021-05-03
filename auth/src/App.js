import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    UNSAFE_componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyATkedAVSQ-eJ_8LpN6EaGzkb0olVM1B04',
                authDomain: 'auth-42fc5.firebaseapp.com',
                projectId: 'auth-42fc5',
                storageBucket: 'auth-42fc5.appspot.com',
                messagingSenderId: '774222967551',
                appId: '1:774222967551:web:ad568b89e502450e7d52ca'
            });
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;