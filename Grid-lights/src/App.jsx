import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "./mini-project/Grid-llights/Grid";
import Navbar from "./Component/Navbar";
import Column from "./mini-project/Column-table/column";
import Chips from "./mini-project/chips-input/Chips";
import Todo from "./mini-project/todo-list/Todo";
import Nestedcom from "./mini-project/Nested-comments/Nestedcom";
import Counter from "./mini-project/Counter/Counter";
import Image from "./mini-project/Image-gallery/Image";
import String from "./mini-project/String-formatter/String";
import Accordian from "./mini-project/Accordian/Accordian";
import Star from "./mini-project/Star-rating/Star";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/grid" element={<Grid />} />
              <Route path="/column" element={<Column />} />
              <Route path="/chip" element={<Chips />} />
              <Route path="/todo-list" element={<Todo />} />
              <Route path="/nested-comments" element={<Nestedcom />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/image" element={<Image />} />
              <Route path="/string" element={<String />} />
              <Route path="/accordian" element={<Accordian />} />
              <Route path="/star" element={<Star />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
