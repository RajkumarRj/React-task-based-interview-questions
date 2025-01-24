import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "./mini-project/Grid-llights/Grid";
import Navbar from "./Component/Navbar";
import Column from "./mini-project/Column-table/column";
import Chips from "./mini-project/chips-input/Chips";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/grid" element={<Grid />} />
          <Route path="/column" element={<Column />} />
          <Route path="/chip" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
