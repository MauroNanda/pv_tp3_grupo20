import "../styles/TaskList.css"

function TaskItem({ tasks, onDeleteTask }) {
// Comprobar que haya tareas, si no hay mostrar un cartel.
    if (!tasks || tasks.length == 0) {
        return <p>No hay tareas para mostrar.</p>;
    }
// Si hay tareas en "task" (pasadas por props) crear la lista.
    return (
        <ul>
            {tasks.map((task) => (
                <li className="task-item" key={task.id}>
                    <div className="task-text">
                        {task.text}
                    </div>
                    {/* Boton que ejecuta funcion de eliminar task x id (pasada por props, creada en App.jsx) */}
                    <button
                        className="delete-button"
                        onClick={() => onDeleteTask(task.id)}
                    >
                        x
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TaskItem;