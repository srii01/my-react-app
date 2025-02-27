import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>My To-Do List</h1>
      {/* Label is correctly associated with input using htmlFor */}
      <label htmlFor="taskInput">Enter Task:</label>
      <input
        type="text"
        id="taskInput" // Unique ID
        name="task"    // Name attribute added
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
        autoComplete="off" // Optional, prevents unwanted autofill
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


