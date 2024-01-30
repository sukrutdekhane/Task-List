import Row from "./Row";
function TaskList(props) {
  return (
    <div class="table">
      <div class="row">
        <div onClick={() => props.handleHeaderClick("task")} className="cell">
          Task
        </div>
        <div onClick={() => props.handleHeaderClick("date")} className="cell">
          Date
        </div>
        <div className="cell">Action</div>
      </div>
      {props.taskList.length === 0 ? (
        <div className="noRecords">No records found</div>
      ) : (
        props.taskList.map((data, index) => {
          return (
            <Row
              onDelete={props.onDelete}
              key={index}
              id={index}
              task={data.task}
              date={data.date}
            />
          );
        })
      )}
    </div>
  );
}

export default TaskList;
