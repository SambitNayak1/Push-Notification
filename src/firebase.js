import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBjPkG2sr08byc2oZlz9SbXb5JcglLp8SA",
  authDomain: "fir-cfeee.firebaseapp.com",
  projectId: "fir-cfeee",
  storageBucket: "fir-cfeee.appspot.com",
  messagingSenderId: "826356252031",
  appId: "1:826356252031:web:c2bd7a65f72f6b63822e4a",
  measurementId: "G-5XWNEHC0R4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
