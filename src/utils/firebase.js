// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firbaseKey,
  authDomain: "blogsite-3b213.firebaseapp.com",
  projectId: "blogsite-3b213",
  storageBucket: "blogsite-3b213.appspot.com",
  messagingSenderId: "121994081818",
  appId: "1:121994081818:web:c79df1cafdc1f001b343a3",
};

// Initialize Firebasee

export const app = initializeApp(firebaseConfig);
