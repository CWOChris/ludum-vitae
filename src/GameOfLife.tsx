import React, { useState, useCallback, useEffect } from 'react';
import { Button, Paper } from '@mui/material';

interface GameOfLifeProps {
  initialGrid?: number[][];
}

const numRows = 50;
const numCols = 50;

const operations = [
  [0, 1], [0, -1],
  [1, -1], [-1, 1],
  [1, 1], [-1, -1],
  [1, 0], [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const GameOfLife: React.FC<GameOfLifeProps> = ({ initialGrid }) => {
  const [grid, setGrid] = useState(() => {
    return initialGrid || generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);
  const speed = 250; // ms between generations

  const runSimulation = useCallback(() => {
    if (!running) return;

    setGrid(g => g.map((row, i) =>
      row.map((cell, k) => {
        let neighbors = 0;
        operations.forEach(([x, y]) => {
          const newI = i + x;
          const newK = k + y;
          if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
            neighbors += g[newI][newK];
          }
        });

        if (neighbors < 2 || neighbors > 3) return 0;
        if (cell === 0 && neighbors === 3) return 1;
        return cell;
      })
    ));
  }, [running]); // Removed `grid` from dependencies

  useEffect(() => {
    let timeoutId;
    if (running) {
      timeoutId = setTimeout(runSimulation, speed);
    }
    return () => clearTimeout(timeoutId);
  }, [running, runSimulation, speed]);

  return (
    <div style={{ margin: '10px' }}>
      <Button variant="contained" color="primary" onClick={() => setRunning(r => !r)}>
        {running ? 'Stop' : 'Start'}
      </Button>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)` }}>
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <Paper key={`${i}-${k}`} onClick={() => {
              const newGrid = JSON.parse(JSON.stringify(grid)); // Consider a more performant deep copy method or direct manipulation with caution
              newGrid[i][k] = grid[i][k] ? 0 : 1;
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? '#000' : undefined,
              border: 'solid 1px black',
              cursor: 'pointer',
            }} />
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;