import React from "react";

function Row(props) {
    function handleDelete() {
        props.onDelete(props.id);
    }
    return <><div class="row">
        <div className="cell">{props.task}</div>
        <div className="cell">{props.date}</div>
        <div className="cell"><button onClick={handleDelete} className="delete_button">Delete</button></div>
    </div>
    </>
}

export default Row;