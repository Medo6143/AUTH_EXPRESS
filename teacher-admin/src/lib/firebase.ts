import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB1jFgU3X732spYjqB9NFMuYPgl_xbFy5Q",
  authDomain: "teacher-748d8.firebaseapp.com",
  projectId: "teacher-748d8",
  storageBucket: "teacher-748d8.firebasestorage.app",
  messagingSenderId: "513957509531",
  appId: "1:513957509531:web:7b68ff26cb090145cc893e",
  measurementId: "G-V2ELY0VG9J"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
