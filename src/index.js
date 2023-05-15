import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import reportWebVitals from './reportWebVitals';

import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAgqsHGFaRJuyDqUZ_cetoPPHKpdljxAJk",
  authDomain: "cart-app-8468c.firebaseapp.com",
  projectId: "cart-app-8468c",
  storageBucket: "cart-app-8468c.appspot.com",
  messagingSenderId: "580413181682",
  appId: "1:580413181682:web:b4fffa8b8a29439fc98a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default db;
