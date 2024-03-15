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

export const template4 = generateEmptyGrid();
// This is a Blinker
template4[2][2] = 1;
template4[2][3] = 1;
template4[2][4] = 1;

export const template5 = generateEmptyGrid();
// This is a Pulsar
template5[2][4] = 1;
template5[2][5] = 1;
template5[2][6] = 1;
template5[2][10] = 1;
template5[2][11] = 1;
template5[2][12] = 1;

template5[4][2] = 1;
template5[4][7] = 1;
template5[4][9] = 1;
template5[4][14] = 1;

template5[5][2] = 1;
template5[5][7] = 1;
template5[5][9] = 1;
template5[5][14] = 1;

template5[6][2] = 1;
template5[6][7] = 1;
template5[6][9] = 1;
template5[6][14] = 1;

template5[7][4] = 1;
template5[7][5] = 1;
template5[7][6] = 1;
template5[7][10] = 1;
template5[7][11] = 1;
template5[7][12] = 1;

for (let i=0; i < 9; i++) {
  for (let j=0; j < 9; j++) {
    if (template5[i][j] === 1) {
      template5[i][14 - j] = 1;
      template5[14 - i][j] = 1;
      template5[14 - i][14 - j] = 1;
    }
  }
}

export const template6 = generateEmptyGrid();
// This is a Pentadecathlon
const middleRow = 10;
const startCol = 5;

for (let i = startCol; i < startCol + 8; i++) {
  template6[middleRow][i] = 1;
}

template6[middleRow - 1][startCol + 1] = 1;
template6[middleRow + 1][startCol + 1] = 1;
template6[middleRow - 1][startCol + 6] = 1;
template6[middleRow + 1][startCol + 6] = 1;

export const template7 = generateEmptyGrid();
// This is a Glider Gun
const pattern = [
  [5, 1], [5, 2], [6, 1], [6, 2],
  [5, 11], [6, 11], [7, 11], [4, 12], [8, 12], [3, 13], [9, 13], [3, 14], [9, 14],
  [6, 15], [4, 16], [8, 16], [5, 17], [6, 17], [7, 17], [6, 18],
  [3, 21], [4, 21], [5, 21], [3, 22], [4, 22], [5, 22], [2, 23], [6, 23],
  [1, 25], [2, 25], [6, 25], [7, 25],
  [3, 35], [4, 35], [3, 36], [4, 36]
];

// Apply the pattern to the grid
pattern.forEach(([x, y]) => {
  template7[x][y] = 1;
});

export const template8 = generateEmptyGrid();
// This is a 4-8-12 Diamond
const diamondRow = 25;
const diamondCol = 25;

const createRow = (row: number, length: number) => {
  const halfLength = Math.floor(length / 2);
  for (let i = -halfLength; i < halfLength; i++) {
    template8[row][diamondCol + i] = 1;
  }
};

createRow(diamondRow - 4, 4);
createRow(diamondRow - 2, 8);
createRow(diamondRow, 12);
createRow(diamondRow + 2, 8);
createRow(diamondRow + 4, 4);

export const template9 = generateEmptyGrid();
// This is a 4-8-12-16 Diamond
const diamondRow2 = 25;
const diamondCol2 = 25;

const createRow2 = (row: number, length: number) => {
  const halfLength = Math.floor(length / 2);
  for (let i = -halfLength; i < halfLength; i++) {
    template9[row][diamondCol2 + i] = 1;
  }
};

createRow2(diamondRow2 - 6, 4);
createRow2(diamondRow2 - 4, 8);
createRow2(diamondRow2 - 2, 12);
createRow2(diamondRow2, 16);
createRow2(diamondRow2 + 2, 12);
createRow2(diamondRow2 + 4, 8);
createRow2(diamondRow2 + 6, 4);

export const template10 = generateEmptyGrid();
// This is the 101 Pattern
const template10Pattern = [
[0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0],
[0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0],
[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0],
[1,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	1],
[1,	1,	0,	1,	0,	1,	0,	0,	1,	1,	0,	0,	1,	0,	1,	0,	1,	1],
[0,	0,	0,	1,	0,	1,	0,	1,	0,	0,	1,	0,	1,	0,	1,	0,	0,	0],
[0,	0,	0,	1,	0,	1,	0,	1,	0,	0,	1,	0,	1,	0,	1,	0,	0,	0],
[1,	1,	0,	1,	0,	1,	0,	0,	1,	1,	0,	0,	1,	0,	1,	0,	1,	1],
[1,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	1],
[0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0],
[0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0],
[0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0],
];

const startRow10 = 10;
const startCol10 = 10;

template10Pattern.forEach((row, rIndex) => {
  row.forEach((cell, cIndex) => {
    const rowPosition = startRow10 + rIndex;
    const colPosition = startCol10 + cIndex;
    if (rowPosition < numRows && colPosition < numCols) {
      template10[rowPosition][colPosition] = cell;
    }
  });
});