class task {
  task;
  date;

  deleteTask(id, tasks) {
    const result = tasks.filter((listItem, index) => {
      return index !== id;
    });
    tasks = result.slice();
    let newList = tasks.slice();
    return newList;
  }
}

export class TableCore {
  #taskList = [];
  #sortColumn = null;
  #sortOrder = null;
  constructor(setTaskList) {
    this.setTaskList = setTaskList;
    this.addTask = this.addTask.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.filter = this.filter.bind(this);
    this.restore = this.restore.bind(this);
    this.sort = this.sort.bind(this);
  }

  setTaskList() {}

  addTask(newTask) {
    const NewTask = new task();
    NewTask.task = newTask.task;
    NewTask.date = newTask.date;

    this.#taskList.push(NewTask);
    let newTasks = this.#taskList.slice();
    this.setTaskList(newTasks);
  }

  filter(text) {
    const result = this.#taskList.filter((listItem, index) => {
      return listItem.task.includes(text) || listItem.date.includes(text);
    });

    if (result.length === 0) {
      this.setTaskList([]);
      return;
    }
    let newTasks = result.slice();
    this.setTaskList(newTasks);
  }

  restore() {
    let newTasks = this.#taskList.slice();
    this.setTaskList(newTasks);
  }

  sort(column) {
    if (this.#sortColumn === column) {
      if (this.#sortOrder === "asc") {
        this.#sortOrder = "desc";
      } else if (this.#sortOrder === "desc") {
        this.#sortColumn = null;
        this.#sortOrder = null;
      }
    } else {
      this.#sortColumn = column;
      this.#sortOrder = "asc";
    }

    if (!this.#sortOrder) {
      this.setTaskList(this.#taskList);
      return;
    }

    let newTasks = this.#taskList.slice();

    newTasks = newTasks.sort((a, b) => {
      const aValue = a[this.#sortColumn];
      const bValue = b[this.#sortColumn];

      if (this.#sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      }
      return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    });

    this.setTaskList(newTasks);
  }

  deleteData(id) {
    const taskTodelte = new task();
    this.#taskList = taskTodelte.deleteTask(id, this.#taskList);
    let newTasks = this.#taskList.slice();
    this.setTaskList(newTasks);
  }
}
