import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        style={{
          backgroundImage: `url(img/magnifying-glass-solid.svg)`,
          backgroundPosition: '270px center',
          backgroundSize: '20px 20px',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <select className="relevance-dropdown">
        <option value="relevance">Relevance</option>
        <option value="price">Price</option>
        <option value="year">Year</option>
      </select>
      <select className="brands-dropdown">
        <option value="all-brands">All Brands</option>
        <option value="brand1">Brand 1</option>
        <option value="brand2">Brand 2</option>
        {/* Add more brand options as needed */}
      </select>
    </div>
  );
}

export default SearchBar;
