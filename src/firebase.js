import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyli6lH0z3IOSD5AZe41-JmYC5LFvKVfU",
    authDomain: "blog-95346.firebaseapp.com",
    projectId: "blog-95346",
    storageBucket: "blog-95346.appspot.com",
    messagingSenderId: "219256841898",
    appId: "1:219256841898:web:5f0efa601ae11be24f92d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();