import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
const [todos, setTodos] = useState<Todo[]>([])

  return (
    <>
      <Header />
      <p>Kanban Board</p>
      <Footer />
    </>
  );
}

export default App;
