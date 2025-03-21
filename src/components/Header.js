import React from "react";
import "./Header.css";

const Header = () => {
  // Get today's date and format it
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header d-flex justify-content-between align-items-center p-3 bg-white shadow">
      <div>
        <h2 className="text-primary">Hello, Kate</h2>
        <p className="text-muted">Today is {formattedDate}</p>
      </div>
      <div className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/50" // Replace with actual profile picture later
          alt="Profile"
          className="profile-img rounded-circle me-2"
        />
        <span>Dr. Kate Smith</span>
      </div>
    </div>
  );
};

export default Header;
