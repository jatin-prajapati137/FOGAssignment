// src/App.js
import React, { useState, useEffect, useRef } from "react";
import Grid from "./Grid";
import { generatePattern } from "./pattern";

function App() {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(10);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1=down, -1=up
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const grid = generatePattern(rows, cols, step);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setStep((s) => {
          if (s >= rows - 2) {
            setDirection(-1);
            return s - 1;
          }
          if (s <= 0) {
            setDirection(1);
            return s + 1;
          }
          return s + direction;
        });
      }, 500);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, rows, direction]);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Assignment</h2>

      <div style={{ marginBottom: 20 }}>
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            min={5}
          />
        </label>
        <label style={{ marginLeft: 10 }}>
          Columns:
          <input
            type="number"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            min={5}
          />
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
      </div>

      <Grid grid={grid} />
    </div>
  );
}

export default App;
