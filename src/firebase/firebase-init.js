import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC9CqEFR1UUGbjheAGm58umRIADgXU_uKE",
  authDomain: "posts-with-comments-mini-app.firebaseapp.com",
  projectId: "posts-with-comments-mini-app",
  databaseURL: "https://posts-with-comments-mini-app-default-rtdb.europe-west1.firebasedatabase.app", 
  storageBucket: "posts-with-comments-mini-app.firebasestorage.app",
  messagingSenderId: "793249202767",
  appId: "1:793249202767:web:1fa739816a761af661e03a",
  measurementId: "G-ESB0EVPKDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export{
    database,
    ref,
    set,
    push,
    get,
}