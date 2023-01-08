import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies-Menu";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
