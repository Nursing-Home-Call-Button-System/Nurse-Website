const firebaseConfig = {
    apiKey: "AIzaSyCKLMx3Vi1Lo_TB6D942OWdmtD_kihL9h4",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://nurse-websit-default-rtdb.firebaseio.com/",
    projectId: "nurse-websit",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "1:982443926776:web:7bf7e73353311b6f5a870d"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // Redirect if not logged in
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "index.html";
    } else {
      loadPatients();
    }
  });
  
  function loadPatients() {
    db.collection("patients").orderBy("roomNumber").onSnapshot((snapshot) => {
      const tbody = document.getElementById("patients-body");
      tbody.innerHTML = "";
  
      snapshot.forEach((doc) => {
        const data = doc.data();
        const row = document.createElement("tr");
  
        const nameCell = document.createElement("td");
        nameCell.textContent = data.name || "N/A";
  
        const roomCell = document.createElement("td");
        roomCell.textContent = data.roomNumber || "N/A";
  
        row.appendChild(nameCell);
        row.appendChild(roomCell);
  
        tbody.appendChild(row);
      });
    });
  }
  