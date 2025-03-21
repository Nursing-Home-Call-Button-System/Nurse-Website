import React, { useState } from "react";
import AddPatientModal from "../components/AddPatientModal";
import "./Analytics.css";

const Analytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [patients, setPatients] = useState([
    { name: "Tyrion Lannister", careType: "Short term", age: 68, room: 687 },
    { name: "Lady Olenna Tyrel", careType: "Long Term", age: 82, room: 204 },
  ]);

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  // Filter patients based on search query
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery) ||
    patient.careType.toLowerCase().includes(searchQuery) ||
    patient.age.toString().includes(searchQuery) ||
    patient.room.toString().includes(searchQuery)
  );

  return (
    <div className="analytics-container p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="analytics-title">Current Patients</h2>
        <div>
          <button className="btn btn-secondary me-2">History</button>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Add Patient</button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search patients..."
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
      </div>

      {/* Patient Table */}
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>Full Name</th>
            <th>Care Type</th>
            <th>Age</th>
            <th>Room Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.careType}</td>
              <td>{patient.age}</td>
              <td>{patient.room}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Patient Modal */}
      <AddPatientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddPatient={handleAddPatient} />
    </div>
  );
};

export default Analytics;
