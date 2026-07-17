import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Certificados from './pages/Certificados';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificados" element={<Certificados />} />
      </Routes>
    </div>
  );
}

export default App;
