import React, { useState } from "react";
import TableHead from "./TableHead"
import AppendRow from "./AppendRow";

function TableView() {
    const [arr, setArr] = useState([]);

    function addItem(inputValue) {

        // for(let i=0;i<arr.length;i++)
        // console.log(arr[i])

        setArr((prevValue) => {
            return [...prevValue, inputValue]
        })
    }
    const [inputValue, setInputValue] = useState({
        Task: "",
        Date: ""
    })
    function handleChange(event) {
        const newValue = event.target.value;
        const name = event.target.name;


        setInputValue((prevValue) => {
            if (name === "task") {
                return (
                    {
                        Task: newValue,
                        Date: prevValue.Date
                    }
                );
            }
            else {
                return (
                    {
                        Task: prevValue.Task,
                        Date: newValue
                    }
                );
            }
        })
    }

    function submitData() {
        addItem(inputValue);
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
                    <input onChange={handleChange} type="text" name="task" value={inputValue.Task} />
                    {arr.map((item) => {
                        return <>
                            <AppendRow Task={item.Task} />
                        </>
                    })}
                </td>
                <td>
                    <input onChange={handleChange} type="date" name="date" value={inputValue.Date} />
                    {arr.map((item) => {
                        return <>
                            {/* TODO: change AppendRow name to Row */}
                            {/* TODO: remove tr and td and use <div> or <span> */}
                            <AppendRow Date={item.Date} />
                        </>
                    })}
                </td>
            </tr>

        </table>
    </>);
}

export default TableView