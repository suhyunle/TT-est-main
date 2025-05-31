import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const fireBaseApiKey = import.meta.env.VITE_APIKEY;

const firebaseConfig = {
  apiKey: fireBaseApiKey,
  authDomain: "devtest-33732.firebaseapp.com",
  projectId: "devtest-33732",
  storageBucket: "devtest-33732.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
