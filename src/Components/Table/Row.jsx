import React from "react";

function Row(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }
    return <><div class="row">
        <div class="cell">{props.task}</div>
        <div class="cell">{props.date}</div>
        <button onClick={handleDelete} className="delete_button">Delete</button>
    </div>
    </>
}

export default Row;