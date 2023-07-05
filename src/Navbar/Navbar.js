import React, { useEffect, useState } from "react";

const Navbar = ({ data, setBackup }) => {
  const FilteredData = (value) => {
    const Temp = data.filter((e) => e.title.includes(value));
    console.log(Temp);
    setBackup(Temp);
  };
  const FilteredDataUser = (value) => {
    console.log(value)
    const Temp = data.filter((e) => e.userId == value);
    console.log('temp ', Temp);
    setBackup(Temp);
  };

  return (
    <div
      className="Navbar"
      style={{ border: "2px solid black", height: "600px", flexGrow: 1 }}
    >
      <div>
        <h3>Search for Title</h3>

        <input
          icon="search"
          placeholder="Search..."
          onChange={(e) => FilteredData(e.target.value)}
        />
      </div>
      <div>
        <h3>User Id</h3>
        <select id="userid" name="User Id" onChange={(e) => FilteredDataUser(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
