import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Core from './Core/Core';
import Footer from './Footer/Footer';

const API = 'https://jsonplaceholder.typicode.com/todos';

function App() {

  
  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);

  useEffect(() => {fetch(API).then(res => res.json()).then(response => {setData(response); setBackup(response)})}, []);

  return (
    <div className="App">
      <Header />
      <div style={{display: 'flex'}}>
      <Navbar data = {data} setBackup = {setBackup}/>
      <div style={{display: 'flex', flexDirection: 'column', width:'75%'}}><Core backup = {backup} /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
