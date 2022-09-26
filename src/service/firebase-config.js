import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_AUTHAPIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  projectId: "vmovie-6b033",
  storageBucket: "vmovie-6b033.appspot.com",
  messagingSenderId: "1045047093925",
  appId: "1:1045047093925:web:afdd8abf6a33f331187b4c",
  measurementId: "G-KQ26YQXJQ5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
