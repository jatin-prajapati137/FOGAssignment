// src/Grid.js
import React from "react";
import "./App.css";

function Grid({ grid }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid[0].length}, 40px)`,
        gap: "2px",
        justifyContent: "center"
      }}
    >
      {grid.flat().map((cell, i) => (
        <div
          key={i}
          style={{
            width: 40,
            height: 40,
            backgroundColor: cell.color,
            border: "1px solid #333",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
          }}
        >
          {cell.number}
        </div>
      ))}
    </div>
  );
}

export default Grid;
