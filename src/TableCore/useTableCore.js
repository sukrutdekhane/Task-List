import { useState, useMemo } from "react";
import { TableCore } from "./TableCore";
export const useTableCore = () => {
  const [taskList, setTaskList] = useState([]);
  const tableCore = useMemo(() => {
    return new TableCore(setTaskList);
  }, []);
  return { tableCore, taskList };
};
