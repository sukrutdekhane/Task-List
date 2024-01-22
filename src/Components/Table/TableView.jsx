import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import SearchBox from "./SearchBox";

function TableView() {
    const [taskList, setTaskList] = useState([]);
    const [taskListClone, setTaskListClone] = useState([]);
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

        setTaskListClone(taskList);
        console.log(taskListClone)
        setTaskList(prevList => {
            const result = prevList.filter((listItem, index) => {
                console.log(listItem.task);
                return listItem.task.includes(text) || listItem.date.includes(text)
            })

            if (result.length === 0) {
                return [{
                    task: "No such task ",
                    date: "No such date"
                }];
            }
            return result
        })

    }

    function restoreData() {
        console.log(taskListClone)
        return setTaskList(taskListClone);
    }



    return (<>
        <SearchBox filterTask={filterTask} />
        <TaskInput setList={addNewTask} restore={restoreData} />
        <TaskList onDelete={deleteTask} taskList={taskList} />
    </>);
}

export default TableView