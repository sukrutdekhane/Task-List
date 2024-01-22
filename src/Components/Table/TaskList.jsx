import Row from "./Row";
function TaskList(props) {
    return <body>

        <div class="table">
            <div class="row">
                <div onClick={() => props.handleHeaderClick('task')} class="cell">Task</div>
                <div onClick={() => props.handleHeaderClick('date')} class="cell">Date</div>
            </div>
        </div>


        <div class="table">
            {props.taskList.length === 0 ? <div>No records found</div> : props.taskList.map((data, index) => {
                return <Row onDelete={props.onDelete} key={index} id={index} task={data.task} date={data.date} />
            })}
        </div>

    </body>
}

export default TaskList;