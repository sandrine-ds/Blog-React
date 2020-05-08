import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuu0yAeIvg-DcunRxRFxQK5Ko75LMAYDs",
  authDomain: "blog-sandiy-react.firebaseapp.com",
  databaseURL: "https://blog-sandiy-react.firebaseio.com",
  projectId: "blog-sandiy-react",
  storageBucket: "blog-sandiy-react.appspot.com",
  messagingSenderId: "84967017251",
  appId: "1:84967017251:web:921a99f132891f804f9a96",
  measurementId: "G-WXYEKEB88S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
