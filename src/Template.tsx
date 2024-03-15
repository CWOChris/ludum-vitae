// Assuming generateEmptyGrid is defined in this file or imported from another
const numRows = 50;
const numCols = 50;

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

export const blankTemplate = generateEmptyGrid();

export const template1 = generateEmptyGrid();
// Modify template1 to include a specific pattern (e.g., a glider)
template1[1][2] = 1;
template1[2][3] = 1;
template1[3][1] = 1;
template1[3][2] = 1;
template1[3][3] = 1;

// Define more templates as needed...
