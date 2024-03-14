import React, { useState, useCallback, useEffect } from 'react';
import { Button, Container, Grid } from '@mui/material';

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

const GameOfLife = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runSimulation = useCallback(() => {
    if (!running) return;

    setGrid((g) => {
      return g.map((row, i) =>
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
          if (cell === 1 && (neighbors === 2 || neighbors === 3)) return 1;
          if (cell === 0 && neighbors === 3) return 1;
          return cell;
        })
      );
    });

    setTimeout(runSimulation, 100);
  }, [running]);

  return (
    <Container>
      <Button 
        onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Start'}
      </Button>
      <Grid container spacing={1}>
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <Grid item xs={1} key={`${i}-${k}`}>
              <div
                onClick={() => {
                  const newGrid = [...grid];
                  newGrid[i][k] = grid[i][k] ? 0 : 1;
                  setGrid(newGrid);
                }}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][k] ? 'black' : undefined,
                  border: 'solid 1px black',
                }}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default GameOfLife;
