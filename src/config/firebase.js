import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,  // Import GitHubAuthProvider
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your_firebase_api_key",
  authDomain: "add_firebase_authDomain",
  projectId: "add_your_project_id",
  storageBucket: "add_your_storagebucket_value",
  messagingSenderId: "add_messagingSenderId",
  appId: "add_your_appId",
  measurementId: "add_your_measurement_Id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();  
