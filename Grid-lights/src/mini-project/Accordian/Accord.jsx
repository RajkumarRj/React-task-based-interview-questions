import React, { useState } from "react";

const Accord = ({ name, info, isOpen, onToggle }) => {
  return (
    <div
      className="accord-item"
      style={{ border: "1px solid black", padding: "10px 20px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{name}</p>
        <p
          onClick={onToggle}
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            padding: "4px 6px",
            backgroundColor: "#EFEFEF",
          }}
        >
          {isOpen ? "-" : "+"}
        </p>
      </div>

      {isOpen && <p style={{ marginTop: "20px" }}>{info}</p>}
    </div>
  );
};

export default Accord;
