import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask }) {


  return (
    <div className="list-container">
      <TaskItem tasks={tasks} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default TaskList;
