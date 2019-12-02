import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDRvJ6U-RRR782vuvdgX2USbxnhUxRc1hc",
    authDomain: "projetofirebaseuniciv.firebaseapp.com",
    databaseURL: "https://projetofirebaseuniciv.firebaseio.com",
    projectId: "projetofirebaseuniciv",
    storageBucket: "projetofirebaseuniciv.appspot.com",
    messagingSenderId: "465543521607",
    appId: "1:465543521607:web:0861f6d9287d4091bd5862",
    measurementId: "G-RTC3WVKXZL"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
