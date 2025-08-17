import React, { useState } from "react";

const ShowHideToggle = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="h-[50vh] w-[30vw] border-2 border-amber-50 rounded-2xl m-auto flex flex-col justify-center items-center gap-6 text-amber-50">
      <button
        onClick={() => setShowMessage((prev) => !prev)}
        className="border-2 border-amber-50 px-6 py-2 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-black transition"
      >
        {showMessage ? "Hide Message" : "Show Message"}
      </button>

      {/* Reserve space for message box */}
      <div className="h-20 flex justify-center items-center">
        {showMessage && (
          <div className="p-4 border border-amber-50 rounded-xl shadow-lg text-center animate-fadeIn">
            <h2 className="text-xl font-semibold">✨ Welcome to my Page ✨</h2>
            <p className="text-sm opacity-80">This message is now visible.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowHideToggle;
