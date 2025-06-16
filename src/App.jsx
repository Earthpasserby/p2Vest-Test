import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter basename={"/"}>
        <ScrollToTop>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
