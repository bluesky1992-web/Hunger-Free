import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAnB0Rse1O6z0Reb8d7bOln0_GSip19h_g",
  authDomain: "hunger-free-world.firebaseapp.com",
  projectId: "hunger-free-world",
  storageBucket: "hunger-free-world.appspot.com",
  messagingSenderId: "484192860469",
  appId: "1:484192860469:web:881db2667e50262660747c",
  measurementId: "G-5GB7Q9JX1Q"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)