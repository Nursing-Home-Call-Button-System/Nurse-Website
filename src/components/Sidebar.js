import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaTasks, FaCog } from "react-icons/fa";
import "./Sidebar.css";
import logo from "../images/logo.png"; 

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3 bg-light vh-100">
      {/* Logo Only */}
      <div className="logo-container d-flex justify-content-center mb-4">
        <img src={logo} alt="CareSync Logo" className="logo" />
      </div>

      {/* Navigation Items */}
      <ul className="nav flex-column flex-grow-1">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark">
            <FaHome className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/analytics" className="nav-link text-dark">
            <FaChartBar className="me-2" /> Analytics
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/task-list" className="nav-link text-dark">
            <FaTasks className="me-2" /> Task List
          </Link>
        </li>
      </ul>

      {/* Move Settings to the Bottom */}
      <div className="settings mt-auto">
        <Link to="/settings" className="nav-link text-dark">
          <FaCog className="me-2" /> Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
