import React from "react";
import { IMAGES,RESTAURANT_NAME } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Galleria } from 'primereact/galleria';

const HeroSection = () => {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate("/menu");
  };
const handleClick = () => {
    navigate("/about");
  };
const images = IMAGES.galleryImages;
console.log(images);
const responsiveOptions = [
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  const itemTemplate = (item) => {
    return <img src={item} alt="Hero" className="w-[50svw] h-[60svh] object-cover rounded-lg shadow-md" />;
  }
  const thumbnailTemplate = (item) => {
    return <img src={item} alt="Hero Thumbnail" className="w-36 h-24 object-cover rounded-lg shadow-md mt-7 " />;
  }

  return (
    <section className="mb-12 ">

      <div className=" flex items-center justify-between w-screen  "  >
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000}  />
        
        <div className="w-[70svw] flex items-center justify-center">
          <motion.div
            className="w-full space-y-5 text-center text-black dark:text-white md:w-1/2 md:text-left"
            initial={{y: 100,rotate:0, opacity:0 }}
            whileInView={{
            y:0,
            opacity:1,
            transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeInOut"
            }
            }}
          >
          <p className="text-xs font-bold tracking-widest uppercase sm:text-sm font-heading ">
            Bond&Bites
          </p>
          <h1 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl font-heading">
            Welcome
          </h1>
          <p className="text-lg w-80  sm:text-base md:text-lg font-body">
            Step into a world of authentic Indian flavors, where every dish is crafted with care and passion. Our chefs use the finest ingredients to create traditional recipes that celebrate India’s rich culinary heritage, offering you a dining experience full of warmth, aroma, and unforgettable taste.
          </p>
          <div className="flex justify-center md:justify-start">

            
              <button
                onClick={handleClick}
                  aria-label="Learn more about us"
                className="px-5 py-2 transition  duration-300 border border-black dark:border-white dark:hover:text-black font-body hover:bg-black dark:hover:bg-[#86C232] hover:text-white "
             >
               Our Story
              </button>

            </div>
        </motion.div>
        </div>
      </div>
    
    </section >
  );
};

export default HeroSection;

