// import { initializeApp } from "firebase/app";
// import {
//   FacebookAuthProvider,
//   getAuth,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBYU9peK55CDnoK1kyrmlmsXNpt8ONfhvY",
//   authDomain: "streamify-64212.firebaseapp.com",
//   projectId: "streamify-64212",
//   storageBucket: "streamify-64212.appspot.com",
//   messagingSenderId: "279550295355",
//   appId: "1:279550295355:web:770cb1c6aa68d0c56d8b1e",
//   measurementId: "G-EL3F3H56ER"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const db = getFirestore(app);
// export const googleProvider = new GoogleAuthProvider();
// export const facebookProvider = new FacebookAuthProvider();

import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,  // Import GitHubAuthProvider
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYU9peK55CDnoK1kyrmlmsXNpt8ONfhvY",
  authDomain: "streamify-64212.firebaseapp.com",
  projectId: "streamify-64212",
  storageBucket: "streamify-64212.appspot.com",
  messagingSenderId: "279550295355",
  appId: "1:279550295355:web:770cb1c6aa68d0c56d8b1e",
  measurementId: "G-EL3F3H56ER"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();  // Use GithubAuthProvider instead of FacebookAuthProvider
