// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARZQeduV1SNf3T-rry_OQXaf0OiX8myjo",
  authDomain: "garden-center-react.firebaseapp.com",
  projectId: "garden-center-react",
  storageBucket: "garden-center-react.appspot.com",
  messagingSenderId: "515938990338",
  appId: "1:515938990338:web:c2519cdce7f1a8e845aa1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db