import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "./mini-project/Grid-llights/Grid";
import Navbar from "./Component/Navbar";
import Column from "./mini-project/Column-table/column";
import Chips from "./mini-project/chips-input/Chips";
import Todo from "./mini-project/todo-list/Todo";
import Nestedcom from "./mini-project/Nested-comments/Nestedcom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/grid" element={<Grid />} />
          <Route path="/column" element={<Column />} />
          <Route path="/chip" element={<Chips />} />
          <Route path="/todo-list" element={<Todo />} />
          <Route path="/nested-comments" element={<Nestedcom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
