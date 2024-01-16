import React, { useState } from "react";
import Table from "./Table";

function HomePage(){
  const [arr,setArr]=useState([]);

  function addItem(inputValue){

      for(let i=0;i<arr.length;i++)
      console.log(arr[i])
    
      setArr((prevValue)=>{
        return [...prevValue,inputValue]
      })
  }
    
  return <Table data={arr} add={addItem}/>
}

export default HomePage

// 1) Create a table and perform insertion and display the content.
// 2) Without using react-table sort the table according to a column.
// 3) Deletion on that table.
