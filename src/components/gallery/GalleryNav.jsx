
import React from "react";
import { Link } from "react-router-dom";

const GalleryNav = ({ onPage }) => {
  const categories = ["all", "food", "beverages", "ambiance", "events"];

  return (
    <div className="flex gap-6 justify-center items-center bg-[#f5f5f5] dark:bg-gray-800 py-4 border-b-2 border-gray-300 dark:border-gray-700 mb-6">
      {categories.map((cat, index) => (
        <Link
          key={index}
          to={`/gallery/${cat}`}
          className={`p-2 text-lg font-light transition-colors duration-300 ${
            onPage === cat
              ? "border-b-2 border-green-500 text-red-600 dark:text-yellow-300"
              : "text-gray-700 dark:text-gray-300 hover:text-[#a37565] dark:hover:text-[#86C232]"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default GalleryNav;
