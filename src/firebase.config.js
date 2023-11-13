import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRIa5StjRtnLcVUC11aPI9tEDeH-F-4Go",
  authDomain: "house-marketplace-app-bb1cd.firebaseapp.com",
  projectId: "house-marketplace-app-bb1cd",
  storageBucket: "house-marketplace-app-bb1cd.appspot.com",
  messagingSenderId: "423762370581",
  appId: "1:423762370581:web:31b799c42b325d6829ee1c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
