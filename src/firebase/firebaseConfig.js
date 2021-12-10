import 'firebase/firestore';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBPkSzrkZ63Bd57fYKCLEQHtduTdoQpW9s',
	authDomain: 'journal-app-udemy-29bcb.firebaseapp.com',
	projectId: 'journal-app-udemy-29bcb',
	storageBucket: 'journal-app-udemy-29bcb.appspot.com',
	messagingSenderId: '496348985631',
	appId: '1:496348985631:web:44176d9680d7c47f53582a'
};

// Initialize Firebase (base datos)
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

// Referencia a firestore
const db = getFirestore();

// Autenticación con google
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
