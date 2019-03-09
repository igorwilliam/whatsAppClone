import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import firebase from '@firebase/app';


class Aplicativo extends Component {
    componentWillMount(){
        // Initialize Firebase
         firebase.initializeApp({
            apiKey: "AIzaSyCmRj4ZxAKEF9zOtrqLKN56H8w93PWR6sY",
            authDomain: "whatsapp-clone-a70d1.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-a70d1.firebaseio.com",
            projectId: "whatsapp-clone-a70d1",
            storageBucket: "whatsapp-clone-a70d1.appspot.com",
            messagingSenderId: "859703641903"
        });

    }
    render(){
        return (
            <App/>
        );

    }
}

AppRegistry.registerComponent(appName, () => Aplicativo);
