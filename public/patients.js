const firebaseConfig = {
  apiKey: 
  authDomain: 
  databaseURL: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId: 
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

document.getElementById("next-btn1").addEventListener("click", loadNextAlerts);


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


