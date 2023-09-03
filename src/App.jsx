import { useState } from 'react';
import './App.css';
import Taskcard from './components/Taskcard';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [date, setDate] = useState('');

// const onSubmit = (e) => {
//   e.preventDefault();
//   setTasks([...tasks, newTask]);
//   setNewTask('');
// }

const addTask = () => {
  if (newTask.trim() !== "") {
    setTasks([...tasks, { text: newTask, date }]);
    setNewTask("");
    setDate("");
  }
};

const deleteTask = (index) => {
  let updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
};

  return (
    <>
      <nav className='navbar'>
        <h2 className='logo'>Tudu</h2>
        <div className='nav-links'>
          <a href="#">Home</a>
          <a href="">My Tasks</a>
        </div>
      </nav>
      <main>
        <form onSubmit={(e) => {e.preventDefault();
        addTask()}}>
          <h4 className='form-header'>Create Task</h4>
          <label htmlFor="taskname" className='task'>
            Task
          </label><br />
          <input type="text" id='taskname' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New Task" /><br />
          <label htmlFor="datetime" className='date'>
            Due Date
          </label><br />
          <input type="datetime-local" name="datetime" value={date} onChange={(e) => setDate(e.target.value)} placeholder='Due date' />
          <button type='submit' className='add-btn' onClick={addTask}>Add Task</button>
        </form>
        <div className='tasks'>
        {tasks.length === 0 ? (
        <div className="no-task">No Tasks Yet😎</div>
      ) : (
        tasks.map((task, index) => (
          <div className="todo-item">
            <Taskcard
              {...tasks}
              key={index}
              text={task.text}
              date={task.date}
              onDelete={() => deleteTask(index)}
            />
          </div>
        ))
      )}
        </div>
      </main>
    </>
  )
}

export default App
