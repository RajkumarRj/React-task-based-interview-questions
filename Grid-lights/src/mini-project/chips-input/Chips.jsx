import React, { useState } from "react";
import "./chips.css";

const Chips = () => {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const pushtoarray = (e) => {
    if (e.key === "Enter" && inputVal.trim() !== "") {
      e.preventDefault();

      setData((prev) => [...prev, inputVal.trim()]);
      setInputVal("");
    }
  };
  const removeItems = (id) => {
    setData((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div className="wrapper">
      <div className="input-div">
        <input
          className="input-val"
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type & hit enter"
          onKeyDown={pushtoarray}
        />
      </div>
      <div className="chips">
        {data.map((val, ind) => {
          return (
            <div className="chips-box">
              {val} <span onClick={() => removeItems(ind)}>&#x274C;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chips;
