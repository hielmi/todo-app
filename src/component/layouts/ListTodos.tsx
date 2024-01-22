import React, { useState } from "react";
import { Checkbox, Label } from "flowbite-react";
import TodoItem from "../fragments/TodoItem";

import { useTodosContext } from "../../hooks/useTodosContext";

const ListTodos = () => {
  const [expandedTodoId, setExpandedTodoId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);
  const { todos } = useTodosContext();

  const filteredTodos = showCompleted
    ? todos
    : todos.filter((todo) => !todo.isDone);

  const sortedTodos = filteredTodos?.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const handleToggleExpand = (id) => {
    setExpandedTodoId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="flex justify-between items-center ">
        <h1 className="text-center font-sans text-lg font-bold block dark:text-white">
          List your todos
        </h1>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            onChange={() => setShowCompleted(!showCompleted)}
            checked={showCompleted}
          />
          <Label htmlFor="remember">Show completed</Label>
        </div>
      </div>
      {todos &&
        sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            expanded={expandedTodoId === todo.id}
            onToggleExpand={() => handleToggleExpand(todo.id)}
          />
        ))}
    </>
  );
};

export default ListTodos;
