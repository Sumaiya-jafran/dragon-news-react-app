// Import the functions you need from the SDKs you need
import { initializeApp,getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeeuax8QHB-N5ZJOtwXPi7ai8aGAghtsY",
  authDomain: "dragon-news-react-app-817d5.firebaseapp.com",
  projectId: "dragon-news-react-app-817d5",
  storageBucket: "dragon-news-react-app-817d5.firebasestorage.app",
  messagingSenderId: "152935321317",
  appId: "1:152935321317:web:49c17407406dce1f198e0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;