// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr7krJ9azuM50M9rGbvopbLUGHLWENM9Q",
  authDomain: "skill-dynamo.firebaseapp.com",
  projectId: "skill-dynamo",
  storageBucket: "skill-dynamo.appspot.com",
  messagingSenderId: "947476451955",
  appId: "1:947476451955:web:4c9fdf2da9cb3db52e1006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;