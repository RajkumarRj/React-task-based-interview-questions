import React, { useEffect, useState } from "react";

const Counter = () => {
  const [inputval, setInputVal] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <h1 style={{ fontSize: "20px" }}>{count}</h1>
      <div className="buttons">
        <button
          style={{ padding: "4px 8px" }}
          onClick={() => setCount((prev) => prev - inputval)}
        >
          -
        </button>
        <button
          style={{ padding: "4px 8px" }}
          onClick={() => setCount((prev) => prev + inputval)}
        >
          +
        </button>
      </div>
      <p>
        increment & decrement by{" "}
        <input
          type="number"
          value={inputval}
          onChange={(e) => setInputVal(Number(e.target.value))}
          defaultValue={1}
        />
      </p>
      <button
        style={{ border: "1px solid black", padding: "4px 8px" }}
        onClick={() => {
          setCount(0);
          setInputVal(1);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
