// dashboard.js

const firebaseConfig = {
    apiKey: 
    authDomain: 
    databaseURL: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // Protect page: redirect if not logged in
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "index.html";
    } else {
      loadAlerts();
    }
  });
  
  function loadAlerts() {
    db.collection("alerts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      const tbody = document.getElementById("alerts-body");
      tbody.innerHTML = ""; // Clear existing rows
  
      snapshot.forEach((doc) => {
        const data = doc.data();
        const alertId = doc.id;
  
        const row = document.createElement("tr");
  
        const nameCell = document.createElement("td");
        nameCell.textContent = data.patientName || "N/A";
  
        const roomCell = document.createElement("td");
        roomCell.textContent = data.roomNumber || "N/A";
  
        const alertTypeCell = document.createElement("td");
        const alertType = data.alertType || "N/A";
        alertTypeCell.textContent = alertType;
  
        if (alertType === "Emergency") {
          alertTypeCell.classList.add("emergency");
        } else if (alertType === "Non-Emergency") {
          alertTypeCell.classList.add("non-emergency");
        }
  
        const commentCell = document.createElement("td");
        const commentInput = document.createElement("input");
        commentInput.type = "text";
        commentInput.value = data.comment || "";
        commentInput.placeholder = "Add comment...";
        commentInput.className = "comment-input";
  
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.className = "save-button";
        saveButton.onclick = () => {
          const newComment = commentInput.value.trim();
          db.collection("alerts").doc(alertId).update({ comment: newComment })
            .then(() => {
              alert("Comment saved!");
            })
            .catch((err) => {
              alert("Error saving comment: " + err.message);
            });
        };
  
        commentCell.appendChild(commentInput);
        commentCell.appendChild(saveButton);
  
        const audioCell = document.createElement("td");
        if (data.audioUrl) {
          const audio = document.createElement("audio");
          audio.controls = true;
          audio.src = data.audioUrl;
          audioCell.appendChild(audio);
        } else {
          audioCell.textContent = "—";
        }
  
        row.appendChild(nameCell);
        row.appendChild(roomCell);
        row.appendChild(alertTypeCell);
        row.appendChild(commentCell);
        row.appendChild(audioCell);
  
        tbody.appendChild(row);
      });
    });
  }
  let lastVisible = null;
const pageSize = 10;

// Load first page
function loadInitialAlerts() {
  db.collection("alerts")
    .orderBy("timestamp", "desc")
    .limit(pageSize)
    .get()
    .then((snapshot) => {
      renderAlerts(snapshot);
      lastVisible = snapshot.docs[snapshot.docs.length - 1];
    });
}

// Load next page
function loadNextAlerts() {
  if (!lastVisible) return;

  db.collection("alerts")
    .orderBy("timestamp", "desc")
    .startAfter(lastVisible)
    .limit(pageSize)
    .get()
    .then((snapshot) => {
      renderAlerts(snapshot, false); // false = append
      if (!snapshot.empty) {
        lastVisible = snapshot.docs[snapshot.docs.length - 1];
      } else {
        alert("No more alerts!");
      }
    });
}

// Render alerts into the table
function renderAlerts(snapshot, clear = true) {
  const tbody = document.getElementById("alerts-body");
  if (clear) tbody.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const alertId = doc.id;

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = data.patientName || "N/A";

    const roomCell = document.createElement("td");
    roomCell.textContent = data.roomNumber || "N/A";

    const alertTypeCell = document.createElement("td");
    const alertType = data.alertType || "N/A";
    alertTypeCell.textContent = alertType;

    if (alertType === "Emergency") {
      alertTypeCell.classList.add("emergency");
    } else if (alertType === "Non-Emergency") {
      alertTypeCell.classList.add("non-emergency");
    }

    const commentCell = document.createElement("td");
    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.value = data.comment || "";
    commentInput.placeholder = "Add comment...";
    commentInput.className = "comment-input";

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "save-button";
    saveButton.onclick = () => {
      const newComment = commentInput.value.trim();
      db.collection("alerts").doc(alertId).update({ comment: newComment })
        .then(() => alert("Comment saved!"))
        .catch((err) => alert("Error: " + err.message));
    };

    commentCell.appendChild(commentInput);
    commentCell.appendChild(saveButton);

    const audioCell = document.createElement("td");
    if (data.audioUrl) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = data.audioUrl;
      audioCell.appendChild(audio);
    } else {
      audioCell.textContent = "—";
    }

    row.appendChild(nameCell);
    row.appendChild(roomCell);
    row.appendChild(alertTypeCell);
    row.appendChild(commentCell);
    row.appendChild(audioCell);

    tbody.appendChild(row);
  });
}

// Auth guard and init
auth.onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    loadInitialAlerts();
  }
});

// Next Page button listener
document.getElementById("next-btn").addEventListener("click", loadNextAlerts);

function logout() {
    auth.signOut().then(() => {
      // ✅ Redirect to login screen
      window.location.href = "index.html"; // or "login.html" if that's your login page
    }).catch((error) => {
      console.error("Logout error:", error);
    });
  }

// 🆕 Live Search Feature
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
    const searchValue = this.value.trim().toLowerCase(); // Get search input text
    const tableRows = document.querySelectorAll('#alerts-body tr'); // Get all patient rows

    tableRows.forEach(row => {
        const patientName = row.children[0]?.textContent.toLowerCase() || "";
        const roomNumber = row.children[1]?.textContent.toLowerCase() || "";

        // Check if patient name OR room number matches the search text
        if (patientName.includes(searchValue) || roomNumber.includes(searchValue)) {
            row.style.display = ''; // Show matching row
        } else {
            row.style.display = 'none'; // Hide non-matching row
        }
    });
});

  
