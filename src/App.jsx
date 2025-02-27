import React from "react";
import './App.css';  // Importing the CSS file

import TodoList from "./TodoList";  // Ensure correct import

console.log("🎯 App component is rendering...");

function App() {
  return (
    <div>
      <h1>✅ React is Rendering!</h1>
      <TodoList />
    </div>
  );
}

export default App;
