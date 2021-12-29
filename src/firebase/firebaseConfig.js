import 'firebase/firestore';
import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// console.log(process.env)
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
// 	apiKey: "AIzaSyAs2knuC724Cx16GI9YdFx1-h9R_6uZnDI",
// 	authDomain: "testing-journal-app-d4e1a.firebaseapp.com",
// 	projectId: "testing-journal-app-d4e1a",
// 	storageBucket: "testing-journal-app-d4e1a.appspot.com",
// 	messagingSenderId: "539075301449",
// 	appId: "1:539075301449:web:f2fcbadbe3b9dfeed36f98"
// };

// if (process.env.NODE_ENV === 'test') {
// 	// testing
// 	initializeApp(firebaseConfigTesting);
// } else {
// 	// dev/prod
// 	initializeApp(firebaseConfig);
// }

initializeApp(firebaseConfig);

// Initialize Firebase (base datos)
// const app = initializeApp(firebaseConfig);

// Referencia a firestore
const db = getFirestore();

// Autenticación con google
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
