import React from "react";
import useFetch from "./useFetch";
import Card from "./Card";
const Pagination = () => {
  const { data, setPage, page } = useFetch();

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setPage((prev) => (prev === 1 ? prev : prev - 1));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="h-[8vh]  bg-gray-500 mt-20  flex justify-center items-center gap-10 rounded-2xl">
        <button
          onClick={handlePrevPage}
          className="border-2 border-amber-50 px-10 py-2 rounded-xl text-amber-50 cursor-pointer"
        >
          Previous Page
        </button>
        <p>{page}</p>
        <button
          onClick={handleNextPage}
          className="border-2 border-amber-50 px-10 py-2 rounded-xl text-amber-50 cursor-pointer"
        >
          Next page
        </button>
      </div>
    </>
  );
};

export default Pagination;
