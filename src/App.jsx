import { useEffect } from "react";
import MainViews from "./component/views/MainViews";

import { useTodosContext } from "./hooks/useTodosContext";

function App() {
  const { dispatch } = useTodosContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const items = JSON.parse(localStorage.getItem("todos"));
      if (items) {
        dispatch({ type: "SET_TODO", payload: items });
      }
    };

    fetchTodos();
  }, [dispatch]);
  return (
    <>
      <MainViews />
    </>
  );
}

export default App;
