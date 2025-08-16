import React from "react";
import "./App.css";
import Counter from "./tasks/01_counter/Counter";
import TodoApp from "./tasks/02_todo/TodoApp";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-gray-600 border-4 border-amber-50 ">
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
}

export default App;
