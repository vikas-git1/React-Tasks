import React from "react";
import "./App.css";
import Counter from "./tasks/01_counter/Counter";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-gray-600 flex justify-center items-center border-4 border-amber-50 ">
      <Counter />
    </div>
  );
}

export default App;
