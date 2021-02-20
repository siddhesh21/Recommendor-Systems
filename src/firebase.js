import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVRPiYpX6PwK7Ee5Q3IGsoj76Ze2-kuMI",
  authDomain: "project-netflix-23ae7.firebaseapp.com",
  projectId: "project-netflix-23ae7",
  storageBucket: "project-netflix-23ae7.appspot.com",
  messagingSenderId: "143007789327",
  appId: "1:143007789327:web:5fd23d40678945b119ce7a",
  measurementId: "G-W1EH778M8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
