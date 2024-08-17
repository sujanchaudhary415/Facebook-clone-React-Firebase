// Firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCH7YX8CmQ7KvuePYfjFcQuHHg9fph62Tw",
  authDomain: "facebook-clone-8169b.firebaseapp.com",
  projectId: "facebook-clone-8169b",
  storageBucket: "facebook-clone-8169b.appspot.com",
  messagingSenderId: "404342314517",
  appId: "1:404342314517:web:2a3e8befab89417e73601c",
  measurementId: "G-K8JLV18GSJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // If using Google sign-in

export { db, auth, provider, serverTimestamp };
