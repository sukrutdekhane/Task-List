import React, { useState } from "react";
import Input from "../Input";

function TaskInput(props) {
  const [taskLabel, setTaskLabel] = useState("");
  const [dueDate, setDueDate] = useState("");
  function OnTaskLabelChange(event) {
    setTaskLabel(event.target.value);
  }
  function OnDateChange(event) {
    setDueDate(event.target.value);
  }
  // use math.random to generate id
  function submitData() {
    const inputValue = {
      // id: Math.floor(Math.random() * 100),
      task: taskLabel,
      date: dueDate,
    };
    props.setList(inputValue);
    setTaskLabel("");
    setDueDate("");
  }

  return (
    <>
      <div className="inputBox">
        <div className="taskBox">
          <Input
            placeholder="Task"
            onChange={OnTaskLabelChange}
            type="text"
            name="task"
            value={taskLabel}
            autoComplete="off"
          />
        </div>
        <div className="dateBox">
          <Input
            placeholder="Date"
            onChange={OnDateChange}
            type="date"
            name="date"
            value={dueDate}
            autoComplete="off"
          />
        </div>
        <button onClick={submitData} className="add_button">
          Add
        </button>
      </div>
    </>
  );
}

export default TaskInput;
