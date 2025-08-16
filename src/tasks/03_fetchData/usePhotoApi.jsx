import React, { useEffect, useState } from "react";

const usePhotoApi = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=1&limit=50`
        );
        const data = await response.json();
        setPhotoData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return photoData;
};

export default usePhotoApi;
