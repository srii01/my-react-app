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
      {/* Add an ID to the input and reference it in the label */}
      <label htmlFor="taskInput">Enter Task:</label>
      <input
        type="text"
        id="taskInput" // Add a matching ID
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
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


