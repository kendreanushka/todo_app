import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

async function handleAddTask(newTaskData) {
  try {
    const newTask = {
      id: Date.now(),
      completed: false,
      ...newTaskData,
    };

    const savedTask = await addTask(newTask);

    setTasks((prevTasks) => [...prevTasks, savedTask]);
  } catch (error) {
    console.error(error);
  }
}

  async function handleToggleTask(id) {
    try {
      const updatedTask = await updateTask(id);

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? updatedTask : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteTask(id) {
    try {
      await deleteTask(id);

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>2DO</h1>
        <p className="subtitle">Stay on top of your tasks</p>
      </header>

      <main className="app-main">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;