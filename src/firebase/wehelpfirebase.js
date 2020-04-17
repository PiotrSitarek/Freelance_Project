import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCquAc-Zd5qMumVn9v6GZxxGF0-n6Tg1eA",
    authDomain: "first-firestore-991db.firebaseapp.com",
    databaseURL: "https://first-firestore-991db.firebaseio.com",
    projectId: "first-firestore-991db",
    storageBucket: "first-firestore-991db.appspot.com",
    messagingSenderId: "270128105620",
    appId: "1:270128105620:web:bae7eaab5b373dfb320c81",
    measurementId: "G-VBEXYTYC6H"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
