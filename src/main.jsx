import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("✅ React is Running!"); // Debugging Log

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
