import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/grid">
        <button>Grid Lights</button>
      </Link>

      <Link to="/column">
        <button>Column Table</button>
      </Link>

      <Link to="/chip">
        <button>Chips</button>
      </Link>
      <Link to="/todo-list">
        <button>Todo List</button>
      </Link>

      <Link to="/nested-comments">
        <button>Nested Comments</button>
      </Link>
    </nav>
  );
};

export default Navbar;
