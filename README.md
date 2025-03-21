# Nursing Home Call Button System - Nurse Website

## Project Overview
This is a **web application** for nurses to **monitor patient calls, manage patient data, and view analytics**.  
It includes:
✔ **Dashboard** with real-time patient updates  
✔ **Analytics Page** displaying patient info & search  
✔ **Modal Form** to add new patients  
✔ **Routing & Sidebar Navigation**  

---

## Technologies Used
| Technology  | Purpose |
|-------------|---------|
| **React.js** | Frontend framework |
| **Bootstrap** | UI styling and components |
| **React Router** | Handles navigation between pages |
| **Firebase Firestore** | (Planned) Database to store patient data |
| **Git & GitHub** | Version control & collaboration |

---

## Folder Structure

/nurse-dashboard              # Root project folder
│── /src                      # Source code directory
│   ├── /components           # Reusable UI components
│   │   ├── Sidebar.js        # Sidebar navigation
│   │   ├── Header.js         # Header with user info
│   │   ├── SearchBar.js      # Search input component
│   │   ├── AddPatientModal.js # Popup form to add patients
│   ├── /pages                # Different sections of the app
│   │   ├── Dashboard.js      # Main dashboard page
│   │   ├── Analytics.js      # Page with patient data
│   │   ├── TaskList.js       # Placeholder for task list page
│   │   ├── Settings.js       # Placeholder for settings page
│   ├── /styles               # CSS files for styling
│   ├── App.js                # Main React app file with routing
│   ├── firebaseConfig.js     # Firebase setup (to be added)
│── package.json              # Project dependencies and scripts
│── README.md                 # Project documentation


---

## How to Run the Project
### Install dependencies
```sh
npm install

## Run the project
npm start

