// src/firebase.ts

// Importiere die Firebase-Funktionen
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Konfiguration deiner Web-App
const firebaseConfig = {
  apiKey: "AIzaSyAmJkutee-i0SkU-LpHwm_lNL5QSyAZIGw",
  authDomain: "faith-journey-app.firebaseapp.com",
  projectId: "faith-journey-app",
  storageBucket: "faith-journey-app.firebasestorage.app",
  messagingSenderId: "482085289702",
  appId: "1:482085289702:web:8bfd99a9c22052d26e8527",
  measurementId: "G-7TQ0QHBRHS"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);

// Analytics (optional, nur sinnvoll im Browser + Produktion)
const analytics = getAnalytics(app);

// Firestore-Instanz exportieren
const db = getFirestore(app);

export { db, analytics };