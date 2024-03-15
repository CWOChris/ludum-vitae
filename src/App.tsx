import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameOfLife from "./GameOfLife";
import HomePage from "./HomePage";
import { template1, template2, template3, blankTemplate } from "./Template";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/GameOfLife/:template" element={<GameOfLife initialGrid={blankTemplate} />} />
                <Route path="/GameOfLife/:template" element={<GameOfLife initialGrid={template1} />} />
                <Route path="/GameOfLife/:template" element={<GameOfLife initialGrid={template2} />} />
                <Route path="/GameOfLife/:template" element={<GameOfLife initialGrid={template3} />} />
            </Routes>
        </Router>
    );
};

export default App;