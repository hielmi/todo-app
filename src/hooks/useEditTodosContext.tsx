import { useContext } from "react";
import { EditTodoContext } from "../context/EditTodoContex";

export const useEditTodosContext = () => {
  const context = useContext(EditTodoContext);
  if (!context) {
    throw new Error(
      "useEditTodosContext must be used within a EditTodoProvider"
    );
  }
  return context;
};
