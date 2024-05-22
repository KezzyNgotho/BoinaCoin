import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Update import
import LandingScreen from '../src/pages/LandingPage';

export default function App() {
  return (
   
   
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingScreen />} />

        </Routes>
      </div>
    </Router>
      
     
  );
}