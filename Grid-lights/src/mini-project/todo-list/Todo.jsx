import React, { useState } from "react";

const Todo = () => {
  const [inputval, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleClick = () => {
    if (inputval.trim() !== "") {
      if (editingIndex !== null) {
        setData((prev) =>
          prev.map((item, index) => (index === editingIndex ? inputval : item))
        );
        setEditingIndex(null);
      } else {
        setData((prev) => [...prev, inputval]);
      }
      setInputVal("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleEdit = (id) => {
    setEditingIndex(id);
    setInputVal(data[id]);
  };
  const handleDelete = (id) => {
    setData((prev) => prev.filter((_, index) => index !== id));
  };
  return (
    <div className="wrapper">
      <div className="input-feild">
        <input
          type="text"
          value={inputval}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter your todo"
        />
        <div className="buttons">
          <button
            onClick={handleClick}
            disabled={!(inputval || editingIndex)}
            style={{
              backgroundColor: `${editingIndex !== null ? "blue" : ""}  `,
            }}
          >
            {editingIndex !== null ? "Update" : "Submit"}
          </button>
          <button
            style={{
              backgroundColor: `${editingIndex !== null ? "blue" : ""}  `,
            }}
            onClick={() => {
              setInputVal("");
              setEditingIndex(null);
            }}
          >
            Cancel
          </button>
        </div>
        <p
          style={{
            fontStyle: "italic",
          }}
        >
          Double click on todo to toggle completion status
        </p>
      </div>

      <div className="todos-field">
        {data.map((val, ind) => (
          <div className="list-field" key={ind}>
            <p>{val}</p>
            <div>
              <button
                style={{ backgroundColor: "green" }}
                onClick={() => handleEdit(ind)}
              >
                Edit
              </button>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => handleDelete(ind)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
