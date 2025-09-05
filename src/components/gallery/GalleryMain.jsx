
import React, { useState } from "react";

const galleryItems = [
  { id: 1, category: "food", src: "https://i.pinimg.com/1200x/77/32/2f/77322f963a2876b7580127c8fa16082f.jpg" },
  { id: 2, category: "beverages", src: "https://i.pinimg.com/1200x/b2/89/37/b28937ac2f2b1efb592f3d00e5ad9283.jpg" },
  { id: 3, category: "ambiance", src: "https://i.pinimg.com/736x/60/cd/da/60cddab34af6d6d4ee0f022792137dc4.jpg" },
  { id: 4, category: "events", src: "https://i.pinimg.com/736x/1d/03/77/1d037769b9f7205ad0012b7d2eabf226.jpg" },
  { id: 5, category: "food", src: "https://i.pinimg.com/736x/de/c8/d7/dec8d7e3205a346913f86728f5f4afc8.jpg" },
  { id: 6, category: "beverages", src: "https://i.pinimg.com/736x/2c/81/66/2c8166e30445a74e4db92ee305b5663f.jpg" },
  { id: 7, category: "ambiance", src: "https://i.pinimg.com/736x/1c/f2/70/1cf270b3f47e4c9f59f97677661a00ba.jpg" },
  { id: 8, category: "events", src: "https://i.pinimg.com/736x/de/ea/ee/deeaee0f98c8f2593aa2914b4a7813df.jpg" },
  { id: 9, category: "food", src: "https://i.pinimg.com/736x/ad/49/c3/ad49c37601d7a3a93bd76483950066c0.jpg" },
  { id: 10, category: "beverages", src: "https://i.pinimg.com/736x/f0/cb/19/f0cb197dd06fc954e9552372b02a7ad6.jpg" },
];

const GalleryMain = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredItems =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-6">

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item, index) => (
          <img
            key={item.id}
            src={item.src}
            alt="gallery"
            className="object-cover w-full transition rounded-lg cursor-pointer h-80 hover:opacity-80"
            onClick={() => openImage(index)}
          />
        ))}
      </div>


      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeImage}
        >

          <button
            onClick={closeImage}
            className="absolute text-3xl font-bold text-white top-5 right-5"
          >
            ×
          </button>


          <button
            onClick={prevImage}
            className="absolute text-4xl font-bold text-white left-5"
          >
            ‹
          </button>


          <img
            src={filteredItems[currentIndex].src}
            alt="selected"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />


          <button
            onClick={nextImage}
            className="absolute text-4xl font-bold text-white right-5"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryMain;
