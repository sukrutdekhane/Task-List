import React,{useState} from "react";
import './table.css'
import TableHead from "./TableHead";
import NewTable from "./NewTable";

function Table(props){
    const [inputValue,setInputValue]=useState({
        Task: "",
        Date: ""
    })
    function handleChange(event){
       const newValue=event.target.value; 
       const name=event.target.name;
       

       setInputValue((prevValue)=>{
        if(name==="task"){
            return (
                {
                    Task: newValue,
                    Date: prevValue.Date
                }
            );
        }
        else{
            return (
                {
                    Task: prevValue.Task,
                    Date: newValue
                }
            );
        }
       })
    }

    function submitData(){
        props.add(inputValue);
        setInputValue({
            Task: "",
            Date: ""
        })
    }
    return (<>
    <button onClick={submitData} class="add_button">Add</button>
    <table>
          <TableHead />
        <tr>
          <td>
          <input onChange={handleChange} type="text" name="task" value={inputValue.Task}/>
          </td>
          <td>
          <input onChange={handleChange} type="date" name="date" value={inputValue.Date}/>
          </td>
          <td>
             {props.data.map((item)=> {
                return <>
                    <NewTable Task={item.Task} Date={item.Date} />
                </>
             })}
          </td>
        </tr>
      </table>
      </>);
}

export default Table