import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => (prevCount < 15 ? prevCount + 1 : prevCount));
  };
  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > -5 ? prevCount - 1 : prevCount));
  };

  const handleReset = () => setCount(0);

  return (
    <div>
      <div className="border-2 border-amber-50 rounded-3xl h-[30vh] md:w-[60vw] w-[80vw] bg-amber-600 flex flex-col justify-center gap-4 items-center">
        <div className="w-[100%] flex flex-col md:flex-row justify-around items-center">
          <button
            disabled={count <= -5}
            className={`font-extrabold text-gray-400 text-3xl bg-black px-8 py-2 rounded-2xl  ${
              count <= -5
                ? `cursor-not-allowed opacity-50`
                : "cursor-pointer  hover:bg-gray-900  hover:text-white transition-all duration-300 ease-in-out"
            }`}
            onClick={handleDecrement}
          >
            Decrement
          </button>

          <p className="font-extrabold text-black text-3xl ">{count}</p>

          <button
            disabled={count >= 15}
            className={`font-extrabold text-gray-400 text-3xl bg-black px-8 py-2 rounded-2xl  ${
              count >= 15
                ? `cursor-not-allowed opacity-50`
                : "cursor-pointer  hover:bg-gray-900  hover:text-white transition-all duration-300 ease-in-out"
            }`}
            onClick={handleIncrement}
          >
            Increment
          </button>
        </div>
        <div>
          <button
            disabled={count === 0}
            className={`font-extrabold text-black text-2xl bg-white px-18 py-2 rounded-2xl  ${
              count === 0
                ? `cursor-not-allowed opacity-50`
                : `cursor-pointer  hover:bg-gray-900  hover:text-white transition-all duration-1000 ease-in-out`
            }`}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
