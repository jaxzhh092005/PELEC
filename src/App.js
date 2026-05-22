import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, selectTasks } from './features/task/taskSlice';
import './App.css';

function App() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = taskText.trim();
    if (!trimmedText) return;

    dispatch(addTask(trimmedText));
    setTaskText('');
  };

  return (
    <div className="App">
      <main className="task-manager">
        <h1>Task Manager</h1>
        <form onSubmit={handleSubmit} className="task-form">
          <label htmlFor="taskInput">New task</label>
          <input
            id="taskInput"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="Enter"
            autoComplete="off"
          />
          <button type="submit" disabled={!taskText.trim()}>
            Add Task
          </button>
        </form>

        <section className="task-list">
          <h2>Tasks</h2>
          {tasks.length === 0 ? (
            <p className="empty-state">No tasks added yet.</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
