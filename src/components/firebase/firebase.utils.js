import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyA93KN60OV94s_jaTwNjLeB6Yfh-XrZ7Ws",
  
    authDomain: "trend-clothing-db-dab06.firebaseapp.com",
  
    projectId: "trend-clothing-db-dab06",
  
    storageBucket: "trend-clothing-db-dab06.appspot.com",
  
    messagingSenderId: "56208669",
  
    appId: "1:56208669:web:6a1b82872838f5507285f4",
  
    measurementId: "G-L99DX9BH4H"
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
