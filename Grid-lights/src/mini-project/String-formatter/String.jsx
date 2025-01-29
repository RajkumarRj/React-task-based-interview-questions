import React, { useState } from "react";

const String = () => {
  const [inputval, setInputVal] = useState("hello world");
  const [transformedText, setTransformedText] = useState("");
  //   alert(inputval);

  const handlelower = () => {
    setTransformedText(inputval.toLowerCase());
  };
  const handleUpper = () => {
    setTransformedText(inputval.toUpperCase());
  };
  const handleCamel = () => {
    setTransformedText(
      inputval
        .toLowerCase()
        .split(" ")
        .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("")
    );
  };
  const handlepascal = () => {
    setTransformedText(
      inputval
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    );
  };
  const handleSnake = () => {
    setTransformedText(inputval.toLowerCase().split(" ").join("_"));
  };
  const handleKebab = () => {
    setTransformedText(inputval.toLowerCase().split(" ").join("-"));
  };
  return (
    <div className="wrapper">
      <div className="textArea">
        <textarea
          style={{ border: "2px solid black" }}
          cols={70}
          rows={5}
          value={inputval}
          onChange={(e) => setInputVal(e.target.value)}
          defaultValue={"hello world"}
        ></textarea>
      </div>
      <div className="func-buttons-flex">
        <button onClick={handlelower}>LowerCase</button>
        <button onClick={handleUpper}>UpperCase</button>
        <button onClick={handleCamel}>CamelCase</button>
        <button onClick={handlepascal}>PascalCase</button>
        <button onClick={handleSnake}>SnakeCase</button>
        <button onClick={handleKebab}> KebabCase</button>
        <button onClick={() => setTransformedText(inputval.trim())}>
          Trim
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Transformed String
        </h1>
        <p>{transformedText}</p>
      </div>
    </div>
  );
};

export default String;
