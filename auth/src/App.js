import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Button, Header, Spiner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    state = { loggedIn: null };

    UNSAFE_componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDtsfP6VlV0CcxsY2ckIOGAV5FuHIBTjJU",
                authDomain: "authentication-aed14.firebaseapp.com",
                projectId: "authentication-aed14",
                storageBucket: "authentication-aed14.appspot.com",
                messagingSenderId: "667148569365",
                appId: "1:667148569365:web:ade16843b9e5ca524ef71c",
                measurementId: "G-78T37JWK5P"
            });
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spiner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;