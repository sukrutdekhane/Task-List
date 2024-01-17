import React from "react";
import LoginPage from "./Pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='HomePage' element={<HomePage />} />
    </Routes>
  )
}

export default App;
