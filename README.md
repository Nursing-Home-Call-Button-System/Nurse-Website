# 🏥 Nurse Dashboard Website

A simple web application for nurses to view patient alerts, manage patients, and personalize their account with profile pictures and settings.

---

## ✨ Features

- View real-time emergency and non-emergency alerts from patients
- Play audio messages attached to alerts
- Add comments on alerts
- Manage personal profile settings (Name, Email, Birthday, Title, Profile Picture)
- Search bar to filter patients by name or room number
- Responsive and clean modern UI for easy navigation

---

## 🗂️ Project Structure

```
public/
├── dashboard.css
├── dashboard.html
├── dashboard.js
├── database.html
├── favicon.ico
├── index.html
├── login.css
├── login.js
├── logo192.png
├── logo512.png
├── patients.html
├── patients.js
├── settings.html

src/
├── firebaseConfig.js
└── images/
    ├── logo.png
    └── logo2.png
```



---

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript
- Firebase Firestore – for patient alerts and user authentication
- Firebase Storage – for storing patient audio messages
- LocalStorage – for saving nurse profile settings locally

---

## 🚀 Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/viyamira/user_interface-circular.git
    ```

2. Navigate to the project folder:

    ```bash
    cd user_interface-circular/public
    ```

3. Open `index.html` in your browser to start the app.



