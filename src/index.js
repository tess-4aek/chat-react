import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCJsCCgL2b9BclJkUor2dPBlQu0DwYrlBQ",
    authDomain: "chat-react-161c1.firebaseapp.com",
    projectId: "chat-react-161c1",
    storageBucket: "chat-react-161c1.appspot.com",
    messagingSenderId: "792017062583",
    appId: "1:792017062583:web:7d28ffebe468eaa7d39b32",
    measurementId: "G-PJXJ5D2B53"
});


export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);