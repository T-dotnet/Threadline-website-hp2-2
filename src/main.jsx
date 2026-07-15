import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/inter";
import "@fontsource/frank-ruhl-libre/400.css";
import { App } from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
