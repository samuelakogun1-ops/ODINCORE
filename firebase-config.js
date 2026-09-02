/**
 * ODINCORE - Firebase Configuration
 * Central initialization for Firebase Authentication + Cloud Firestore
 * 
 * This is the SINGLE SOURCE OF TRUTH configuration.
 * All application data flows through Firebase.
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js';

// Firebase Configuration for odin-private project
const firebaseConfig = {
  apiKey: "AIzaSyBKvZ9vY8xW7uQ4nR3pM2lK1jH0gF9eDc8",
  authDomain: "odin-private.firebaseapp.com",
  projectId: "odin-private",
  storageBucket: "odin-private.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890ghij"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

// Set Firestore settings for better performance
import { connectFirestoreEmulator, setLogLevel } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js';
import { connectAuthEmulator } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js';

// Development: Comment out these lines for production
// if (window.location.hostname === 'localhost') {
//   try {
//     connectAuthEmulator(auth, 'http://localhost:9099');
//     connectFirestoreEmulator(db, 'localhost', 8080);
//     setLogLevel('debug');
//   } catch (e) {
//     // Emulator already initialized
//   }
// }

export default app;
