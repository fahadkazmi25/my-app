
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyDL1TG8RDi0jFWj6Q0_GTGE5564Z9d6l1g",
  authDomain: "next-app-55fdd.firebaseapp.com",
  projectId: "next-app-55fdd",
  storageBucket: "next-app-55fdd.appspot.com",
  messagingSenderId: "1072187383157",
  appId: "1:1072187383157:web:e0eef2dce316231c4cc73c",
  measurementId: "G-JKS7DMFDX2"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)