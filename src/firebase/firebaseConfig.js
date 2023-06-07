import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCc6uErXAgQzfvHGTDHj98w4PVxbZCrsWg",
    authDomain: "react-app-67fe1.firebaseapp.com",
    projectId: "react-app-67fe1",
    storageBucket: "react-app-67fe1.appspot.com",
    messagingSenderId: "596728635189",
    appId: "1:596728635189:web:31ef3b74a76b2accd8f67c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  export const initFirebase = () => app