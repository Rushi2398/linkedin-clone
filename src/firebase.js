import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgI_w71U3K7KJkYEDIgX7BNkl3V2rDMp0",
  authDomain: "linkedin-clone-552af.firebaseapp.com",
  projectId: "linkedin-clone-552af",
  storageBucket: "linkedin-clone-552af.appspot.com",
  messagingSenderId: "456539394532",
  appId: "1:456539394532:web:9775e90a31c11804f1b7f1",
  measurementId: "G-8KH4VQC0Q9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
