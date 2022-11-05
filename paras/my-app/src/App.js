import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import Second from "./components/Second";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="Second" element={<Second />} />
      </Routes>
    </div>
  );
};

export default App;
