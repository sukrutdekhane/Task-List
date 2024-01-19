import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import SearchBox from "./SearchBox";

function TableView() {
    const [taskList, setTaskList] = useState([]);

    function addNewTask(newTask) {
        setTaskList((prevList) => {
            console.log(newTask)
            return [...prevList, newTask]
        })
    }

    function deleteTask(id) {
        setTaskList(prevList => {
            return prevList.filter((listItem, index) => {
                return index !== id
            })
        })
    }


    function filterTask(text) {

        const len = taskList.length
        const taskListClone = taskList
        setTaskList(prevList => {
            const result = prevList.filter((listItem, index) => {
                console.log(listItem.task);
                return listItem.task.includes(text) || listItem.date.includes(text)
            })

            if (result.length == 0) {
                alert("Invalid input");
                return taskListClone
            }
            return result
        })

    }



    return (<>
        <SearchBox filterTask={filterTask} />
        <TaskInput setList={addNewTask} />
        <TaskList onDelete={deleteTask} taskList={taskList} />
    </>);
}

export default TableView