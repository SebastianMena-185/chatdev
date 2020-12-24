import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

firebase.initializeApp({

    apiKey: "AIzaSyAUdGwn33h2wsNb1X0d0rd9IROu6S6q7fI",
    authDomain: "devschats.firebaseapp.com",
    databaseURL: "https://devschats.firebaseio.com",
    projectId: "devschats",
    storageBucket: "devschats.appspot.com",
    messagingSenderId: "729806540874",
    appId: "1:729806540874:web:7f2a721c8248e4949156b3"
  
});
// <script src="/__/firebase/8.0.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
