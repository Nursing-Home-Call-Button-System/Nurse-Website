// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKLMx3Vi1Lo_TB6D942OWdmtD_kihL9h4",
  authDomain: "nurse-websit.firebaseapp.com",
  databaseURL: "https://nurse-websit-default-rtdb.firebaseio.com",
  projectId: "nurse-websit",
  storageBucket: "nurse-websit.appspot.com",
  messagingSenderId: "982443926776",
  appId: "1:982443926776:web:7bf7e73353311b6f5a870d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
