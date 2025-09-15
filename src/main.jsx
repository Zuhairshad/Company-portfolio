// src/main.jsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// Tiny non-blocking fallback (keeps CLS low)
function BootFallback() {
  return (
    <div
      aria-busy="true"
      className="min-h-screen flex items-center justify-center text-sm opacity-80"
    >
      Loading…
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<BootFallback />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
