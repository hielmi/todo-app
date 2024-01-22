import React from "react";
import { createContext, useReducer } from "react";

// Define the type for the context
interface TodosContextType {
  todos: any;
  dispatch: any;
}

// Create the context with a default value
const defaultValue: TodosContextType = {
  todos: [],
  dispatch: () => {},
};
export const TodosContext = createContext(defaultValue);

export const todosReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_TODO":
      return { ...state, todos: action.payload || [] };
    case "CREATE_TODO":
      return { ...state, todos: [action.payload, ...(state.todos || [])] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: (state.todos || []).filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export const TodosContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
