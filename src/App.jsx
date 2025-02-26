import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Welcome to My Custom React App 🚀</h1>
      <p>This is a React app deployed on GitHub Pages!</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default App;

