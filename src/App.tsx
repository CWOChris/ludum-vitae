// App.tsx adjustments
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameOfLife from "./GameOfLife";
import HomePage from "./HomePage";
import { template1, blankTemplate /*, template2, template3 -- Ensure these are defined */ } from "./Template";

// Create a mapping or use a switch-case to select the template based on a parameter
const selectTemplate = (templateId) => {
  switch (templateId) {
    case '1': return template1;
    // case '2': return template2;
    // case '3': return template3;
    default: return blankTemplate;
  }
};

const GameOfLifeRouteWrapper = () => {
  let { template } = useParams();
  let initialGrid = selectTemplate(template);
  return <GameOfLife initialGrid={initialGrid} />;
};

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/GameOfLife/:template" element={<GameOfLifeRouteWrapper />} />
            </Routes>
        </Router>
    );
};

export default App;
