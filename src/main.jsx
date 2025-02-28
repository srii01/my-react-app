import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Added CSS import
import App from "./App.jsx";

console.log("🚀 React is mounting...");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
