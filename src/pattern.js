// src/pattern.js

// Fixed blue cells (1-based indexing)
const bluePositions = new Set([
  12, 19, 23, 28, 34, 37, 45, 46, 55, 56,
  64, 67, 78, 82, 89, 93, 98, 104, 107, 115,
  116, 125, 126, 134, 137, 143, 148, 152, 159, 168, 163,
  174, 177, 185, 186
]);

// Predefined red sequences for each iteration
const redIterations = [
  [15,24,33,42,51,62,73,84,95,106,117,128,139,150,159,168,177,186],
  [17,26,35,44,53,62,71,82,93,104,115,125,137,148,169,170,179,188],
  [18,30,39,48,57,66,75,84,93,102,111,122,133,144,155,166,177,188],
  // Add more iterations as needed
];

export function generatePattern(rows, cols, step) {
  const grid = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ({
      number: r * cols + c + 1,
      color: "black"
    }))
  );

  // top & bottom rows green
  for (let c = 0; c < cols; c++) {
    grid[0][c].color = "limegreen";
    grid[rows - 1][c].color = "limegreen";
  }

  // fixed blue
  bluePositions.forEach((pos) => {
    const r = Math.floor((pos - 1) / cols);
    const c = (pos - 1) % cols;
    if (r < rows && c < cols && grid[r][c].color !== "limegreen") {
      grid[r][c].color = "blue";
    }
  });

  // moving red based on current iteration
  const iteration = redIterations[step % redIterations.length];
  iteration.forEach((pos) => {
    const r = Math.floor((pos - 1) / cols);
    const c = (pos - 1) % cols;
    if (r < rows && c < cols && grid[r][c].color !== "limegreen") {
      grid[r][c].color = "red";
    }
  });

  return grid;
}
