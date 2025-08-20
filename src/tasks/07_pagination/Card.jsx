import React from "react";

const Card = ({ item }) => {
  return (
    <div className="border-2 border-amber-50 rounded-2xl h-[30vh] w-[80vw] md:w-[25vw] sm:w-[40vw] overflow-hidden">
      <div className="h-[80%] w-[100%] ">
        <img
          src={item.download_url}
          //   alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2  text-amber-50 font-bold">
        <p className="text-center">{item.author}</p>
      </div>
    </div>
  );
};

export default Card;
