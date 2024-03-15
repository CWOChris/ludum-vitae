import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameOfLife from "./GameOfLife";
import HomePage from "./HomePage";
import { blankTemplate, template1, template2, template3 } from "./Template";

// A utility function or a similar approach to select the appropriate template
const getTemplate = (templateId) => {
    switch(templateId) {
        case "1":
            return template1;
        case "2":
            return template2;
        case "3":
            return template3;
        default:
            return blankTemplate;
    }
};

// A component to wrap GameOfLife and pass the selected template
const GameOfLifeWrapper = ({ templateId }) => {
    const initialGrid = getTemplate(templateId);
    return <GameOfLife initialGrid={initialGrid} />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/GameOfLife/:templateId" element={({ match }) => <GameOfLifeWrapper templateId={match.params.templateId} />} />
            </Routes>
        </Router>
    );
};

export default App;
