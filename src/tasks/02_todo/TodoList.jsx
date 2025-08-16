import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const TodoList = ({ todos, setTodos }) => {
  const removeItem = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <ul className="w-80 flex flex-col gap-2">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow hover:bg-orange-50 transition-all"
        >
          <span>{todo}</span>
          <RxCrossCircled
            onClick={() => removeItem(index)}
            className="text-red-500 cursor-pointer hover:text-red-700 text-xl"
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
