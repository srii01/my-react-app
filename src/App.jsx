<<<<<<< HEAD
import React from "react";
import './App.css';  // Importing the CSS file

import TodoList from "./TodoList";  // Ensure correct import

console.log("🎯 App component is rendering...");

function App() {
  return (
    <div>
      <h1>✅ React is Rendering!</h1>
      <TodoList />
=======
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const taskIcons = ["📖", "📝", "📜"]; // Icons for tasks

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, deleted: false, icon: taskIcons[Math.floor(Math.random() * taskIcons.length)] }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, deleted: true } : t
    );
    setTasks(updatedTasks);
    setTimeout(() => {
      setTasks(tasks.filter((_, i) => i !== index));
    }, 500); // Smooth delete transition
  };

  return (
    <div style={styles.container}>
      <div style={styles.todoBox}>
        <h1 style={styles.title}>📋 Stay Organized with Your Tasks!</h1>
        <h2 style={styles.subtitle}>Todo List</h2>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.button}>Add Task</button>
        </div>
        <p style={styles.taskCount}>{tasks.length} tasks left</p>
        <ul style={styles.taskList}>
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                ...styles.taskItem,
                backgroundColor: t.deleted ? "#fffacd" : "#e3f2fd",
                transition: "background-color 0.5s ease",
              }}
            >
              {t.icon} {t.text}
              <button onClick={() => deleteTask(index)} style={styles.deleteButton}>❌</button>
            </li>
          ))}
        </ul>
      </div>
>>>>>>> 1f9575b (Initial commit)
    </div>
  );
}

<<<<<<< HEAD
=======
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e6fa", // Light purple background
    fontFamily: "Arial, sans-serif",
  },
  todoBox: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "90%",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.3rem",
    marginBottom: "20px",
    color: "#666",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    flexGrow: 1,
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
  taskCount: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#555",
  },
  taskList: {
    listStyle: "none",
    padding: "0",
  },
  taskItem: {
    fontSize: "18px",
    fontWeight: "bold", // 🔥 Makes text more readable
    color: "#333", // 🌟 Darker text for contrast
    padding: "8px 12px",
    borderRadius: "5px",
    marginTop: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e3f2fd", // Default light blue
  },
  
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "pink",
    border: "none",
    padding: "5px 10px",
    fontSize: "14px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

>>>>>>> 1f9575b (Initial commit)
export default App;
