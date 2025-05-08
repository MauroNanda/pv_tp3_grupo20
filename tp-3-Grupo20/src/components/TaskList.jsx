import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <TaskItem tasks={tasks}/>
  );
}

export default TaskList;
