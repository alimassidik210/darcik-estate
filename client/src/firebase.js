// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "darcik-estate.firebaseapp.com",
  projectId: "darcik-estate",
  storageBucket: "darcik-estate.appspot.com",
  messagingSenderId: "162248319467",
  appId: "1:162248319467:web:9922ae72b4afc02c4f79ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
