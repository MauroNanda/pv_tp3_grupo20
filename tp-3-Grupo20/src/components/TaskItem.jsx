function TaskItem({ tasks }) {
    return (
        <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
            {task.text}
            </div>
            <span>x</span>
          </li>
        ))}
      </ul>
    )
}

export default TaskItem;