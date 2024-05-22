// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4boTdI4crB-pV2JMPVsh_kfQNloPpknY",
  authDomain: "my-movie-app-1f623.firebaseapp.com",
  projectId: "my-movie-app-1f623",
  storageBucket: "my-movie-app-1f623.appspot.com",
  messagingSenderId: "777726215037",
  appId: "1:777726215037:web:52d7cef5b9518dbf250214",
  measurementId: "G-34C84YW1SR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
