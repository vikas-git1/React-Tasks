import React, { useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple",
  "Strawberry",
  "Watermelon",
  "Kiwi",
  "Papaya",
  "Blueberry",
  "Cherry",
  "Peach",
  "Lemon",
  "Guava",
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItem = searchTerm
    ? items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="w-[40vw] min-h-[50vh] border border-orange-400 rounded-2xl m-auto p-6 shadow-lg bg-white flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-orange-600 text-center">
        Fruit Search
      </h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Search Fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      />

      {/* Result List */}
      <ul className="flex flex-col gap-2 mt-2">
        {searchTerm &&
          (filteredItem.length > 0 ? (
            filteredItem.map((fruit, i) => (
              <li
                key={i}
                className="px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 cursor-pointer transition"
              >
                {fruit}
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic text-center">
              No matching fruit found
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
