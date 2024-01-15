import React from "react";
import  Form from "./Components/Form";
import {Routes, Route} from "react-router-dom";
import NextPage from "./Components/nextPage";



// function App() {
//    return <Form />
//  }
function App() {
  return (
    <Routes>
      <Route path = '/' element={<Form /> } />
      <Route path='NextPage' element={<NextPage />} />
    </Routes>
  )
}

export default App;
