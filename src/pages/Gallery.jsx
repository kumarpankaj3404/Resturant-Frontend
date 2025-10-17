
import React from "react";
import { useParams } from "react-router-dom";
import GalleryNav from "../components/gallery/GalleryNav";
import GalleryMain from "../components/gallery/GalleryMain";

const Gallery = () => {
  const { category } = useParams();

  return (
    <>
      <GalleryNav onPage={category} />
      <GalleryMain category={category} />
    </>
  );
};

export default Gallery;
