import React from "react";

function Row(props) {
    return <div class="row">
        <div class="cell">{props.task}</div>
        <div class="cell">{props.date}</div>
    </div>
}

export default Row;