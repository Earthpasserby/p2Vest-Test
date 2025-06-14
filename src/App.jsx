import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename={"/"}>
        <ScrollToTop>
          <Routes></Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
