import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameOfLifeWrapper from './GameOfLifeWrapper'; // Assuming GameOfLifeWrapper is now its own component
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GameOfLife/:templateId" element={<GameOfLifeWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;