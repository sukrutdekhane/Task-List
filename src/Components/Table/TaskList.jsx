import Row from "./Row";
function TaskList(props) {
    return <body>

        <div class="table">
            <div class="row">
                <div class="cell">Task</div>
                <div class="cell">Date</div>
            </div>
        </div>


        <div class="table">
            {props.taskList.map((data, index) => {
                return <Row onDelete={props.onDelete} key={index} id={index} task={data.task} date={data.date} />
            })}
        </div>

    </body>
}

export default TaskList;