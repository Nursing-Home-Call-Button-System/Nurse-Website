import React, { useState } from "react";
import "./AddPatientModal.css"; // Styling for the popup

const AddPatientModal = ({ isOpen, onClose, onAddPatient }) => {
  const [name, setName] = useState("");
  const [careType, setCareType] = useState("");
  const [dob, setDob] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !careType || !dob || !room) {
      alert("Please fill all fields!");
      return;
    }

    const newPatient = {
      name,
      careType,
      age: new Date().getFullYear() - new Date(dob).getFullYear(), // Calculate Age
      room: Number(room),
    };

    onAddPatient(newPatient); // Add patient to table
    onClose(); // Close modal
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Add New Patient</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Long term/Short term" value={careType} onChange={(e) => setCareType(e.target.value)} />
          <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
          <input type="number" placeholder="Assigned Room #" value={room} onChange={(e) => setRoom(e.target.value)} />

          <div className="modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientModal;
