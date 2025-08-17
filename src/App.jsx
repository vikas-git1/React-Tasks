import React from "react";
import "./App.css";
import Counter from "./tasks/01_counter/Counter";
import TodoApp from "./tasks/02_todo/TodoApp";
import PhotoGallery from "./tasks/03_fetchData/PhotoGallery";
import FormValidation from "./tasks/04_formValidation/FormValidation";

function App() {
  return (
    <div className="min-h-[100vh] w-[100vw] p-20 bg-gray-600 border-4 border-amber-50 ">
      {/* <Counter /> */}
      {/* <TodoApp /> */}
      {/* <PhotoGallery /> */}
      <FormValidation />
    </div>
  );
}

export default App;
