import firebase from 'firebase' //this is importing from node modules

//paste firebase config here
const firebaseApp = firebase.initializeApp{
    apiKey: "AIzaSyDj0X7apT9T2nT667oAMWh9xottUXU4VW8",
    authDomain: "clone-d2171.firebaseapp.com",
    projectId: "clone-d2171",
    storageBucket: "clone-d2171.appspot.com",
    messagingSenderId: "369758845547",
    appId: "1:369758845547:web:7596aa6981ce8f15814f2e",
    measurementId: "G-1BBXQYENRP"
  };

  const db = firebase.firestore();

