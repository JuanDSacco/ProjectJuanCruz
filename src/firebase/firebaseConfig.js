// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKNoKv9JQpzoG8j01gUqxrwN9YigoOXcw",
  authDomain: "ultimaentrega-90dcf.firebaseapp.com",
  projectId: "ultimaentrega-90dcf",
  storageBucket: "ultimaentrega-90dcf.appspot.com",
  messagingSenderId: "444568283181",
  appId: "1:444568283181:web:32eec5887d1681ca8d70a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);