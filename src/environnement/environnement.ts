// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAqfAWu_XcP3Bvdrfp7vKR-ExY7LRc7jCM",
  authDomain: "romain-portfolio.firebaseapp.com",
  projectId: "romain-portfolio",
  storageBucket: "romain-portfolio.appspot.com",
  messagingSenderId: "423525939774",
  appId: "1:423525939774:web:46112478e6c5729d382f6f",
  measurementId: "G-FZ10LNXPLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
