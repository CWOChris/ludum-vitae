import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GameOfLifeWrapper from "./GameOfLifeWrapper"; // Update the import path as necessary

const App: React.FC = () => {
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