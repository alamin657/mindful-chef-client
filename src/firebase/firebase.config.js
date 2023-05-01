// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIUBsuvqyQZPKeDF2U2JGzdlEjSpjapu0",
    authDomain: "mindful-chef-client.firebaseapp.com",
    projectId: "mindful-chef-client",
    storageBucket: "mindful-chef-client.appspot.com",
    messagingSenderId: "314869071979",
    appId: "1:314869071979:web:9c8bbcf606e0fa81e9712e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;