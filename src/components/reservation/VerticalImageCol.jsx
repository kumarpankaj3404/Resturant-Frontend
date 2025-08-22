import React from "react";
import { IMAGES } from "../../utils/constants";

const VerticalImageColumn = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      {IMAGES.VerticalImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`image-${index}`}
          className="object-cover w-full h-1/3" 
        />
      ))}
    </div>
  );
};

export default VerticalImageColumn;

