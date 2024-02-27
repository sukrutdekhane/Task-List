import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import SearchBox from "./SearchBox";
import { useTableCore } from "../../TableCore/useTableCore";

function TableView() {
  const { tableCore, taskList } = useTableCore();
  return (
    <div className="tableViewcontainer">
      <TaskInput setList={tableCore.addTask} />
      <div className="searchBoxtable">
        <SearchBox filterTask={tableCore.filter} restore={tableCore.restore} />
        <TaskList
          key={taskList.id}
          id={taskList.id}
          taskList={taskList}
          onDelete={tableCore.deleteData}
          handleHeaderClick={tableCore.sort}
        />
      </div>
    </div>
  );
}

export default TableView;
