import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=9`
      );
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return { page, setPage, data };
};

export default useFetch;
