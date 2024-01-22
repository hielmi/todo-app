import React from "react";
import { createContext, useState } from "react";

type EditTodoContextType = {
  selectedTodo: any;
  setEditTodo: any;
};

const defaultValue: EditTodoContextType = {
  selectedTodo: null,
  setEditTodo: () => {},
};

export const EditTodoContext = createContext(defaultValue);

export const EditTodoContextProvider = ({ children }) => {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const setEditTodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <EditTodoContext.Provider value={{ selectedTodo, setEditTodo }}>
      {children}
    </EditTodoContext.Provider>
  );
};
