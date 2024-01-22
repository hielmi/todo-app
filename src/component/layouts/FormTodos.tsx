import React, { useState, useEffect } from "react";
import InputField from "../ui/InputField";
import TextArea from "../ui/Textarea";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";

import { useTodosContext } from "../../hooks/useTodosContext";
import { useEditTodosContext } from "../../hooks/useEditTodosContext";

const FormTodos = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const { todos, dispatch } = useTodosContext();
  const { selectedTodo, setEditTodo } = useEditTodosContext();

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDesc(selectedTodo.desc);
      setDate(selectedTodo.date);
    } else {
      setTitle("");
      setDesc("");
      setDate(new Date().toISOString().slice(0, 10));
      setEditTodo(null);
    }
  }, [selectedTodo]);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Do you want to update ${selectedTodo.title}?`,
      showCancelButton: true,
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodos = todos.map((t) =>
          t.id === selectedTodo.id ? { ...t, title, desc, date } : t
        );
        setTitle("");
        setDesc("");
        setDate(new Date().toISOString().slice(0, 10));

        localStorage.setItem("todos", JSON.stringify(newTodos));
        dispatch({ type: "SET_TODO", payload: newTodos });
        setEditTodo(null);
        Swal.fire("Saved!", "", "success");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: +new Date(), title, desc, date, isDone: false };

    const existingTodosString = localStorage.getItem("todos");
    const existingTodos = existingTodosString
      ? JSON.parse(existingTodosString)
      : [];

    const updatedTodos = [...existingTodos, newTodo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    dispatch({ type: "CREATE_TODO", payload: newTodo });

    setDate(new Date().toISOString().slice(0, 10));
    setTitle("");
    setDesc("");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your todo has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form
      onSubmit={selectedTodo ? handleSubmitEdit : handleSubmit}
      className="p-4 w-2/5  rounded"
    >
      <InputField
        name="title"
        label="Title"
        placeholder="Title"
        type="text"
        value={title}
        onchange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        id="desc"
        label="Description"
        placeholder="Description"
        rows={4}
        value={desc}
        onchange={(e) => setDesc(e.target.value)}
      />
      <InputField
        name="date"
        label="Date"
        type="date"
        value={date}
        onchange={(e) => setDate(e.target.value)}
      />
      <div className="flex justify-end">
        <Button color="blue" type="submit">
          {selectedTodo ? "Update" : "Save"}
        </Button>
        {selectedTodo ? (
          <Button
            color="gray"
            className="ml-2"
            onClick={() => setEditTodo(null)}
          >
            cancel
          </Button>
        ) : null}
      </div>
    </form>
  );
};

export default FormTodos;
