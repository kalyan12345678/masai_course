// Basic Firebase config (replace with your own config)
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDycPYqw_fHHdpiiqGlWf6NPR9fZ1j7Sek",
  authDomain: "auth-8f9e2.firebaseapp.com",
  projectId: "auth-8f9e2",
  storageBucket: "auth-8f9e2.firebasestorage.app",
  messagingSenderId: "1036381096180",
  appId: "1:1036381096180:web:7db7aa9d8f42053b18f6a1",
  measurementId: "G-HZNQZXXC00"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
