import React, { useEffect, useState } from "react";

const Table = ({ matrix }) => {
  return (
    <table border={2} style={{ marginTop: "20px" }}>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td key={j}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const column = () => {
  const [row, setRow] = useState(2);
  const [col, setCol] = useState(2);
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    let number = 1;
    const newMatrix = Array.from({ length: row }, () =>
      Array.from({ length: col }, () => number++)
    );
    console.log(newMatrix);

    setMatrix(newMatrix);
  }, [row, col]);

  return (
    <>
      <div className="wrapper">
        <form action="">
          <label>Rows:: {row}</label>
          <input
            type="range"
            defaultValue={2}
            min={2}
            max={8}
            value={row}
            onChange={(e) => setRow(e.target.value)}
          />
          <label>Column:: {col}</label>{" "}
          <input
            type="range"
            defaultValue={2}
            min={2}
            value={col}
            max={8}
            onChange={(e) => setCol(e.target.value)}
          />
        </form>

        <Table matrix={matrix} />
      </div>
    </>
  );
};

export default column;
