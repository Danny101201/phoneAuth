import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use
// import "firebase/auth";
// import {...} from "firebase/database";
// import "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCwd5h3guBmjMduS3Ca8RouDfrimaP3WoI",
  authDomain: "phone-auth-a11c3.firebaseapp.com",
  projectId: "phone-auth-a11c3",
  storageBucket: "phone-auth-a11c3.appspot.com",
  messagingSenderId: "769415222409",
  appId: "1:769415222409:web:b16ce07420287f0fbc6258",
  measurementId: "G-LHDQG113GS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase