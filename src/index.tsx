import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpencesProvider } from "./context/ExpencesContext/ExpencesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ExpencesProvider>
    <App />
  </ExpencesProvider>
);
