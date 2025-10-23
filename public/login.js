// login.js

 // Your Firebase configuration
 const firebaseConfig = {
  apiKey: 
  authDomain:
  databaseURL: 
  storageBucket: 
  messagingSenderId: 
  appId: 
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
