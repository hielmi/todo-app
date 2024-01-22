import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { TodosContextProvider } from "./context/TodoContext";
import { EditTodoContextProvider } from "./context/EditTodoContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodosContextProvider>
      <EditTodoContextProvider>
        <App />
      </EditTodoContextProvider>
    </TodosContextProvider>
  </React.StrictMode>
);
