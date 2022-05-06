// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp9FK2_9cE3gmrLF4QepL9bREIcqnOxsk",
    authDomain: "laptop-dokan.firebaseapp.com",
    projectId: "laptop-dokan",
    storageBucket: "laptop-dokan.appspot.com",
    messagingSenderId: "628323720350",
    appId: "1:628323720350:web:3238af7a3d5b67196a6f8f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth