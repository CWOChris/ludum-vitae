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
// This is a glider
template1[1][2] = 1;
template1[2][3] = 1;
template1[3][1] = 1;
template1[3][2] = 1;
template1[3][3] = 1;

export const template2 = generateEmptyGrid();
// This is a Beacon
template2[1][1] = 1;
template2[1][2] = 1;
template2[2][1] = 1;
template2[2][2] = 1;
template2[3][3] = 1;
template2[3][4] = 1;
template2[4][3] = 1;
template2[4][4] = 1;

export const template3 = generateEmptyGrid();
// This is a Toad
template3[2][2] = 1;
template3[2][3] = 1;
template3[2][4] = 1;
template3[3][1] = 1;
template3[3][2] = 1;
template3[3][3] = 1;