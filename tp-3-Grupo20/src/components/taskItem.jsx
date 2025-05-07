function TaskList({ tasks, onDelete, onToggleComplete }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
