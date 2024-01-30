import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import SearchBox from "./SearchBox";

function TableView() {
  const [taskList, setTaskList] = useState([]);
  const [taskListClone, setTaskListClone] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  function addNewTask(newTask) {
    setTaskList((prevList) => {
      console.log(newTask);
      const result = [...prevList, newTask];
      setTaskListClone(result);
      return result;
    });
  }

  function deleteTask(id) {
    setTaskList((prevList) => {
      const result = prevList.filter((listItem, index) => {
        return index !== id;
      });
      setTaskListClone(result);
      return result;
    });
  }

  function filterTask(text) {
    setTaskList((prevList) => {
      const result = prevList.filter((listItem, index) => {
        console.log(listItem.task);
        return listItem.task.includes(text) || listItem.date.includes(text);
      });

      if (result.length === 0) {
        return [];
      }
      return result;
    });
  }

  function restoreData() {
    console.log(taskListClone);
    return setTaskList(taskListClone);
  }

  function handleHeaderClick(column) {
    if (sortColumn === column) {
      if (sortOrder === "asc") {
        setSortOrder("desc");
      } else if (sortOrder === "desc") {
        setSortColumn(null);
        setSortOrder(null);
      }
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }

    if (!sortOrder) {
      setTaskList(taskListClone);
      return;
    }

    //  TODO: move it to Utility.js file
    const sortedTableData = [...taskList].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
      }
    });

    setTaskList(sortedTableData);
  }

  return (
    <div className="tableViewcontainer">
      <TaskInput setList={addNewTask} />
      <SearchBox filterTask={filterTask} restore={restoreData} />
      <TaskList
        key={taskList.id}
        id={taskList.id}
        onDelete={deleteTask}
        taskList={taskList}
        handleHeaderClick={handleHeaderClick}
      />
    </div>
  );
}

export default TableView;
