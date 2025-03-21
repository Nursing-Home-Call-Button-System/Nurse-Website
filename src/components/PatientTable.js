import React, { useState } from "react";
import "./PatientTable.css";

const PatientTable = ({ searchQuery }) => {
  const patients = [
    { name: "Michael Jackson", room: 101, case: "Emergency", comments: "God Help" },
    { name: "Emma Watson", room: 205, case: "Non-Emergency", comments: "Accio Water" },
  ];

  // Filter patients based on search input
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery) ||
    patient.room.toString().includes(searchQuery) ||
    patient.case.toLowerCase().includes(searchQuery) ||
    patient.comments.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="patient-table mt-4">
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>Full Name</th>
            <th>Room Number</th>
            <th>Case</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.room}</td>
              <td>
                <span className={`badge ${patient.case === "Emergency" ? "bg-danger" : "bg-success"}`}>
                  {patient.case}
                </span>
              </td>
              <td>{patient.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
