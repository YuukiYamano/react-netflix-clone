// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1KoXZTUQ_NMQ4zQ-uAcM5MjnldJ-3VyU",
  authDomain: "netflix-clone-68db2.firebaseapp.com",
  projectId: "netflix-clone-68db2",
  storageBucket: "netflix-clone-68db2.appspot.com",
  messagingSenderId: "2198997255",
  appId: "1:2198997255:web:b1461d848d3f58f9f1dda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)