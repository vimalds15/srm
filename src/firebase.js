import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAGyLjWL9QYPjHDuFhbSjxR0kF_TWBJFcQ",
  authDomain: "srmist-6ee9a.firebaseapp.com",
  projectId: "srmist-6ee9a",
  storageBucket: "srmist-6ee9a.appspot.com",
  messagingSenderId: "84795150643",
  appId: "1:84795150643:web:13fc971fd3ead2a7ed2e46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider };
export default db;