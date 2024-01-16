import React,{useState} from "react";
import './table.css'
import TableHead from "./TableHead";

function Table(){
    const [inputValue,setInputValue]=useState({
        Text: "",
        Date: ""
    })
    function handleChange(event){
       const newValue=event.target.value; 
       const name=event.target.name;

       setInputValue((prevValue)=>{
        if(name==="text"){
            return (
                {
                    Text: newValue,
                    Date: prevValue.Date
                }
            );
        }
        else{
            return (
                {
                    Text: prevValue.Text,
                    Date: newValue
                }
            );
        }
       })
    }
    return (<>
    <button class="add_button">Add</button>
    <table>
          <TableHead />
        <tr>
          <td>
          <input onChange={handleChange} type="text" name="task" value={inputValue.Text}/>
          </td>
          <td>
          <input onChange={handleChange} type="date" name="date" value={inputValue.Date}/>
          </td>
        </tr>
      </table>
      </>);
}

export default Table