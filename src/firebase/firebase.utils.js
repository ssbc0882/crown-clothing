import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC-yBxOQ9pNBptCnLVz4nYmBaub9BrsGdY",
  authDomain: "crown-bb.firebaseapp.com",
  projectId: "crown-bb",
  storageBucket: "crown-bb.appspot.com",
  messagingSenderId: "1023002431411",
  appId: "1:1023002431411:web:660ef096bb0fbbbf4385c6",
  measurementId: "G-QMJNT02L47",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
