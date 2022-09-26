import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_AUTHAPIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.STORAGEBUCKET}`,
  messagingSenderId: `${process.env.MESSAGINGSENDERID}`,
  appId: `${process.env.APPID}`,
  measurementId: `${process.env.MEASUREMENID}`,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
