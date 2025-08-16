import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Clear all todos
  const clearAll = () => setTodos([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-orange-300 flex flex-col items-center justify-start pt-10">
      <h1 className="text-4xl font-bold text-orange-800 mb-6">Todo App</h1>
      <AddTodo setTodos={setTodos} todos={todos} />
      <div className="mb-4">
        <button
          onClick={clearAll}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
        >
          Clear All
        </button>
      </div>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default TodoApp;
