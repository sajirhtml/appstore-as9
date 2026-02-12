// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbrd6RlEVkLujSjSGPS0Em7FYAtwfKMqY",
  authDomain: "appstore-d6dd5.firebaseapp.com",
  projectId: "appstore-d6dd5",
  storageBucket: "appstore-d6dd5.firebasestorage.app",
  messagingSenderId: "132407267832",
  appId: "1:132407267832:web:a3bf6a331e1c52795d860d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;