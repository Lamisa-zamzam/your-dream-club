import firebase from "firebase";

export const firebaseConfig = {
    apiKey: "AIzaSyB3pA6X1xWEzcgxXLctQbQBj_q5nZJ7P2A",
    authDomain: "build-football-club.firebaseapp.com",
    projectId: "build-football-club",
    storageBucket: "build-football-club.appspot.com",
    messagingSenderId: "641651703051",
    appId: "1:641651703051:web:9d2ae0caa0d2bb720d360e",
    measurementId: "G-0FJH4J9FP2",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
