import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASNKnWloXIA_Rea0KyO6Vligl2IyGyObc",
  authDomain: "musicpro-6590a.firebaseapp.com",
  projectId: "musicpro-6590a",
  storageBucket: "musicpro-6590a.appspot.com",
  messagingSenderId: "779235522463",
  appId: "1:779235522463:web:3ab1ebf570a6ab9a56afaa",
  measurementId: "G-BXJBLZ69GY"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};