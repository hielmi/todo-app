import React from "react";
import {
  BiChevronRight,
  BiChevronDown,
  BiCheckCircle,
  BiSolidCheckCircle,
  BiSolidEdit,
  BiSolidTrash,
} from "react-icons/bi";
import Swal from "sweetalert2";
import { useTodosContext } from "../../hooks/useTodosContext";
import { useEditTodosContext } from "../../hooks/useEditTodosContext";

const TodoItem = ({ todo, expanded, onToggleExpand }) => {
  const { todos, dispatch } = useTodosContext();
  const { setEditTodo } = useEditTodosContext();

  const handleDelete = () => {
    Swal.fire({
      title: `Do you want to delete ${todo.title}?`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem(
          "todos",
          JSON.stringify(todos.filter((t) => t.id !== todo.id))
        );
        dispatch({ type: "DELETE_TODO", payload: todo.id });
        Swal.fire("Deleted!", "", "success");
      }
    });
  };

  const handleIsCompleted = () => {
    Swal.fire({
      title: `Do you want to ${todo.isDone ? "uncomplete" : "complete"} ${
        todo.title
      }?`,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodos = todos.map((t) =>
          t.id === todo.id ? { ...t, isDone: !t.isDone } : t
        );

        localStorage.setItem("todos", JSON.stringify(newTodos));
        dispatch({ type: "SET_TODO", payload: newTodos });
        Swal.fire("Saved!", "", "success");
      }
    });
  };

  const handleEditTodo = () => {
    setEditTodo(todo);
  };

  return (
    <div
      className={`p-2 mb-3 bg-gray-500 rounded ${
        todo.isDone ? "bg-gray-500" : "bg-gray-700"
      }`}
      key={todo.id}
    >
      <div className="p-3 flex">
        <div className="flex grow cursor-pointer" onClick={onToggleExpand}>
          {expanded ? (
            <BiChevronDown size={25} color="white" />
          ) : (
            <BiChevronRight size={25} color="white" />
          )}
          <p
            className={`text-white ${todo.isDone && "line-through"} font-bold`}
          >
            {todo.title}
          </p>
        </div>
        <div className="flex items-center gap-2.5 justify-end">
          <button onClick={handleIsCompleted}>
            {todo.isDone ? (
              <BiSolidCheckCircle size={25} color="#22c55e" />
            ) : (
              <BiCheckCircle size={25} color="#22c55e" />
            )}
          </button>
          <button onClick={handleEditTodo}>
            <BiSolidEdit size={25} color="#fbbf24" />
          </button>
          <button onClick={handleDelete}>
            <BiSolidTrash size={25} color="#fb7185" />
          </button>
        </div>
      </div>
      {expanded && (
        <div className="px-9 text-white">
          <p>{todo.date}</p>
          <p>{todo.desc}</p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
