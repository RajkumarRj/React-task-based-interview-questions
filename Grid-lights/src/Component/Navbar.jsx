import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
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
      <Link to="/counter">
        <button>Counter</button>
      </Link>
      <Link to="/image">
        <button>ImageG</button>
      </Link>
      <Link to="/string">
        <button>String</button>
      </Link>
      <Link to="/accordian">
        <button>Accordian</button>
      </Link>
      <Link to={"/star"}>
        <button>Star</button>
      </Link>
    </nav>
  );
};

export default Navbar;
