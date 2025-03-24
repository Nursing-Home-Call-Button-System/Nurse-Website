// login.js

 // Your Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCKLMx3Vi1Lo_TB6D942OWdmtD_kihL9h4",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://nurse-websit-default-rtdb.firebaseio.com/",  // Note: This is required for the Realtime Database.
  projectId: "nurse-websit",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:982443926776:web:7bf7e73353311b6f5a870d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorElement = document.getElementById('login-error');

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('Login successful:', userCredential.user.email);
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error('Login failed:', error);
      errorElement.textContent = "Invalid email or password.";
    });
});
