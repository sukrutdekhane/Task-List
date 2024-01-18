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
            {props.taskList.map((data) => {
                return <Row task={data.task} date={data.date} />
            })}
        </div>

    </body>
}

export default TaskList;