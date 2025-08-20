import React from "react";
import {IMAGES} from "../../utils/constants";
const HorizontalImageRow = () => {
  
  const images = IMAGES.horizontalRowImages || []; 
  return (
    <div className="flex w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
  {images.map((src, index) => (
    <div key={index} className="w-1/5 h-full">
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="object-cover w-full h-full"
      />
    </div>
  ))}
</div>

  );
};

export default HorizontalImageRow;
