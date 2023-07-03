import React, { useEffect, useState } from 'react';

const Navbar = ({data, setBackup}) => {
    const FilteredData = (value) => {
        const Temp = data.filter(e => e.title.includes(value));
        console.log(Temp);
        setBackup(Temp);
    }

    return (
      <div className="Navbar" style={{border:'2px solid black', height:'600px', width: '25%'}}>
        <div>
                <h3>Search for Title</h3>

                <input icon='search'
                placeholder='Search...'
                onChange={(e) => FilteredData(e.target.value)}
            />
            </div>
      </div>
    );
  }
  
  export default Navbar;