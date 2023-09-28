// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiw-lRgQ8OJUOMw11_Q5mtZ_6shMqPjqU",
  authDomain: "netflixgpt-5c4a7.firebaseapp.com",
  projectId: "netflixgpt-5c4a7",
  storageBucket: "netflixgpt-5c4a7.appspot.com",
  messagingSenderId: "112864892440",
  appId: "1:112864892440:web:d785ca383694d51d83d56d",
  measurementId: "G-0K5Q74V7L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
