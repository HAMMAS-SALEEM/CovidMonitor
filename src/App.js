import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Details from './components/Details';

function App() {
  const [id, setId] = useState('');
  const handleDetail = (e) => {
    setId(e.target.id);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage handleDetail={handleDetail} />} />
        <Route path="/details" element={<Details id={id} />} />
      </Routes>
    </>
  );
}

export default App;
