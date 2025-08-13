import React from "react";

const HorizontalImageRow = () => {
  const images = [
    "https://i.pinimg.com/736x/35/54/bd/3554bda2d9087101d5aae39c2c293f89.jpg",
    "https://i.pinimg.com/1200x/35/95/2d/35952d12f15b3094a6505391a0bfdf7b.jpg",
    "https://i.pinimg.com/736x/6d/f4/58/6df458846c4154a7a6d0f2340410bc54.jpg",
    "https://i.pinimg.com/736x/49/0b/1b/490b1bdc071d07b29ecfb983f4261ee1.jpg",
    "https://i.pinimg.com/736x/40/5f/e1/405fe1304ab85050c02e3633c0f3b84e.jpg",
  ];

  return (
    <div className="flex w-full h-[300px]">
      {images.map((src, index) => (
        <div key={index} className="w-1/5 h-full">
          <img src={src} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default HorizontalImageRow;
