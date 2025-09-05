
import React from "react";
import { useParams } from "react-router-dom";
import GalleryNav from "../components/gallery/GalleryNav";
import GalleryMain from "../components/gallery/GalleryMain";

const Gallery = () => {
  const { category } = useParams();

  return (
    <>
    <div className="w-full h-20 bg-[#48352f]"></div>
      <GalleryNav onPage={category} />
      <GalleryMain category={category} />
    </>
  );
};

export default Gallery;
