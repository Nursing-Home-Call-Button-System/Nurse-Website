import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="search-bar d-flex align-items-center p-2">
      <FaSearch className="search-icon text-muted me-2" />
      <input
        type="text"
        className="form-control"
        placeholder="Search patient history..."
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} // Update search query
      />
    </div>
  );
};

export default SearchBar;
