import React, { useState } from "react";

const AddTodo = ({ setTodos, todos }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    if (todoInput.trim() === "") return;
    setTodos([...todos, todoInput]);
    setTodoInput(""); // clear input after adding
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter a todo..."
        className="px-4 py-2 rounded-lg w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        onClick={handleAddTodo}
        className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
