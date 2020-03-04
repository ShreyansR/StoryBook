import Rebase from 're-base'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgItUcHtWpfhZQJKHDup1tNwx2ZqpU2ac",
    authDomain: "storybook-c252b.firebaseapp.com",
    databaseURL: "https://storybook-c252b.firebaseio.com",
    projectId: "storybook-c252b",
    storageBucket: "storybook-c252b.appspot.com",
    messagingSenderId: "175105562163",
    appId: "1:175105562163:web:70b46a9efaeb2a2f873546",
    measurementId: "G-TMXHZRGPN7"
};


const fireB = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(fireB.database());
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {fireB, base, googleProvider};
