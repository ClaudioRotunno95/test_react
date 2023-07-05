import React, { useEffect, useState } from 'react';
/*function Core() {
  
    return (
      <div className="Core" style={{border:'2px solid black', height:'600px', width:'75%'}}>
      </div>
    );
  }*/
  
  

  const Core = ({backup, paginationInfo}) => {
    console.log(backup);
    
    return backup?.slice(paginationInfo.from, paginationInfo.to).map(e =>
        <div
    key={e.id}
    style = {{border:'2px solid black'}}
    >
    {e.id}
    <span style={{marginLeft: '25px'}}>UserId: {e.userId}</span>
    <div  style = {{border: '1px solid blue', height: '70px', marginLeft: '25px'}}>{e.title}</div>
    </div>
    );
    
}

export default Core;