// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrEsuTFplcblH3JfUnKZaiubh4kLTNWAY",
  authDomain: "my-movie-project-app.firebaseapp.com",
  projectId: "my-movie-project-app",
  storageBucket: "my-movie-project-app.appspot.com",
  messagingSenderId: "1083541896884",
  appId: "1:1083541896884:web:96c9a4a147958f62bc61e1",
  measurementId: "G-CWL4L7496N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
