import React from "react";
import GameOfLife from "./component/GameOfLife";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div>
      <CssBaseline />
      <GameOfLife />
    </div>
  );
}

export default App;