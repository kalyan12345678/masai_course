import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKCa1CcWgH-WaSu8NZSUSVJIZD7gMyauk",
  authDomain: "healthy-habits-tracker-app.firebaseapp.com",
  databaseURL: "https://healthy-habits-tracker-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "healthy-habits-tracker-app",
  storageBucket: "healthy-habits-tracker-app.appspot.com",
  messagingSenderId: "755940701359",
  appId: "1:755940701359:web:cbf207d15c87916e79905a",
  measurementId: "G-QP4ZER9S4T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
