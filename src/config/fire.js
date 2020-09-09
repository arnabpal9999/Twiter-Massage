import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC-tyvbqRQFqAGWaFRRQ2aXNZVRAsqGFJ8",
    authDomain: "arnab-39cd0.firebaseapp.com",
    databaseURL: "https://arnab-39cd0.firebaseio.com",
    projectId: "arnab-39cd0",
    storageBucket: "arnab-39cd0.appspot.com",
    messagingSenderId: "811595476260",
    appId: "1:811595476260:web:a001cf3e6f65f969be97b1",
    measurementId: "G-0PG9XWDD2Q"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;