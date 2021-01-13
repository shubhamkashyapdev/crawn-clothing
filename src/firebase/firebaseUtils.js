import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA7YIyl6FQq0AlNFRgFOttmYIbN-l7mAZs",
  authDomain: "crwon-clothing.firebaseapp.com",
  projectId: "crwon-clothing",
  storageBucket: "crwon-clothing.appspot.com",
  messagingSenderId: "207493158845",
  appId: "1:207493158845:web:cf6aad45cec081174ee4d4",
  measurementId: "G-E1Q74JP8YQ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;