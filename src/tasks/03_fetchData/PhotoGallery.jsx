import React from "react";
import usePhotoApi from "./usePhotoApi";
import PhotoCard from "./PhotoCard";
const PhotoGallery = () => {
  const data = usePhotoApi();
  //   console.log("Recieving data from photo api,", data);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 place-items-center">
      {Array.isArray(data) &&
        data
          .filter((item) => item.download_url)
          .map((item) => {
            return <PhotoCard item={item} key={item.id} />;
          })}
    </div>
  );
};

export default PhotoGallery;
