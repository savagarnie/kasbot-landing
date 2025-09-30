import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// WAJIB: import CSS utama yang ada direktif tailwind
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
