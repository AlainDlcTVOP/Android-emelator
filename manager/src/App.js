import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';



class App extends Component {

    UNSAFE_componentWillMount() {
        if (!firebase.apps.length) {
            const config = {
                apiKey: 'AIzaSyCg9V9zXgWDHh456LhctIaTK9pcTtM2Bdo',
                authDomain: 'manager-868e8.firebaseapp.com',
                projectId: 'manager-868e8',
                storageBucket: 'manager-868e8.appspot.com',
                messagingSenderId: '375632105582',
                appId: '1:375632105582:web:8f142c0ee8a17cde2dd67f'

            };
            // Initialize Firebase
            firebase.initializeApp(config);
        }
    };
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;