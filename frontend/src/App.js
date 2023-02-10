import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./component/layouts/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<AuthLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
