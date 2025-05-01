import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  return (
    <div className="app-container">
      <h1>Lista de tareas TP3</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
