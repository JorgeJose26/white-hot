// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRIn-IcX_AoFFky5sXnY8kBa8sUzfZW0I",
    authDomain: "white-hot-faafb.firebaseapp.com",
    projectId: "white-hot-faafb",
    storageBucket: "white-hot-faafb.appspot.com",
    messagingSenderId: "631315884095",
    appId: "1:631315884095:web:d45a1c4e26c1ee8679f08a",
    measurementId: "G-H19CM9FF47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);