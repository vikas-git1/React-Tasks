import React, { useState } from "react";

const DarkLightToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={`w-full h-[80vh] flex justify-center items-center rounded-2xl transition-colors duration-500 ${
        darkMode ? "bg-black" : "bg-amber-50"
      }`}
    >
      <button
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
        className={`border-2  px-10 py-2 rounded-xl transition-colors duration-500  cursor-pointer ${
          darkMode
            ? "text-amber-50 border-amber-50 hover:bg-amber-50 hover:text-black"
            : "text-black border-black hover:bg-black hover:text-amber-50"
        }`}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default DarkLightToggle;
