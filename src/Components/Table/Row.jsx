import React from "react";

function Row(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }
  return (
    <>
      <div class="row">
        <div id="task_cell" className="cell">
          {props.task}
        </div>
        <div id="date_cell" className="cell">
          {props.date}
        </div>
        <div className="cell">
          <button onClick={handleDelete} className="delete_button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Row;
