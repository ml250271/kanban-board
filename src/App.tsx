import { useState } from "react";
import { AddTodo } from "./components/AddTodo";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
const [todos, setTodos] = useState<Todo[]>([])

const toggleComplete: ToggleComplete = selectedTodo => {
  const updatedTodos = todos.map(todo => {
    if (todo === selectedTodo) {
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
  setTodos(updatedTodos);
};

const addTodo: AddTodo = newTodo => {
  newTodo.trim() !== "" &&
    setTodos([...todos, { text: newTodo, complete: false }]);
};

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <Footer />
    </>
  );
}

export default App;
