import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function TableView() {
    const [taskList, setTaskList] = useState([]);
    function addNewTask(newTask) {
        console.log(newTask);
        setTaskList((prevList) => {
            return [...prevList, newTask]
        })
    }

    return (<>
        <TaskInput setList={addNewTask} />
        <TaskList taskList={taskList} />
    </>);
}

export default TableView