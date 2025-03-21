import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import PatientTable from "../components/PatientTable";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-3">
      <SearchBar setSearchQuery={setSearchQuery} />
      <PatientTable searchQuery={searchQuery} />
    </div>
  );
};

export default Dashboard;
