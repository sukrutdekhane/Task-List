import React from "react";
import  Form from "./Components/Form";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";


function App() {
  return (
    <Routes>
      <Route path = '/' element={<Form /> } />
      <Route path='HomePage' element={<HomePage />} />
    </Routes>
  )
}

export default App;
