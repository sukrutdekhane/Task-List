import React, { useState } from "react";
import Input from "../Input"

function TaskInput(props) {
    const [taskLabel, setTaskLabel] = useState("");
    const [dueDate, setDueDate] = useState("");
    function OnTaskLabelChange(event) {

        setTaskLabel(event.target.value);
    }
    function OnDateChange(event) {
        setDueDate(event.target.value);
    }

    function submitData() {
        const inputValue = {
            task: taskLabel,
            date: dueDate
        }
        props.setList(inputValue);
        setTaskLabel("");
        setDueDate("");
    }
    return (<>
        <div className="input">
            <Input placeholder="Task" onChange={OnTaskLabelChange} type="text" name="task" value={taskLabel} autoComplete="off" />
            <Input placeholder="Date" onChange={OnDateChange} type="date" name="date" value={dueDate} autoComplete="off" />
        </div>
        <button onClick={submitData} className="add_button">Add</button>
    </>)
}

export default TaskInput;