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
    <section >

      <div className="mt-28 flex items-center justify-between w-screen  "  >
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000}  />
        
        <div className="w-[70svw] flex items-center justify-center">
          <motion.div
            className="w-full space-y-5 text-center text-black md:w-1/2 md:text-left"
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
          <p className="text-xs font-bold tracking-widest uppercase sm:text-sm font-heading">
            That Indian Restaurant
          </p>
          <h1 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl font-heading">
            Welcome
          </h1>
          <p className="text-lg w-80 text-black sm:text-base md:text-lg font-body">
            Step into a world of authentic Indian flavors, where every dish is crafted with care and passion. Our chefs use the finest ingredients to create traditional recipes that celebrate India’s rich culinary heritage, offering you a dining experience full of warmth, aroma, and unforgettable taste.
          </p>
          <div className="flex justify-center md:justify-start">

            
              <button
                onClick={handleClick}
                  aria-label="Learn more about us"
                className="px-5 py-2 transition  duration-300 border border-black font-body hover:bg-black dark:hover:bg-[#86C232] hover:text-white "
             >
               Our Story
              </button>

            </div>
        </motion.div>
        </div>
      </div>
      <div className="z-10 font-bold text-center text-white max-w-10xl text-10xl text-outline">
        <motion.h1
          tabIndex={0}
          className="mb-8 tracking-widest uppercase font-heading sm:text-xl md:text-5xl dark:text-white-shadow"
          initial={{y: -150,opacity:0}}
          animate={{
            y:0,
            opacity:1,
          }}
          transition={{
            duration:1
          }}
        >
          Welcome to
        </motion.h1>

        <motion.h2
          tabIndex={0}
          className="text-3xl font-bold leading-tight mb-14 sm:text-4xl md:text-6xl font-heading dark:text-white-shadow"
          initial={{y: +150,opacity:0}}
          animate={{
            y:0,
            opacity:1,
          }}
          transition={{
            delay:1,
            duration:0.75
          }}
        >
          {RESTAURANT_NAME}
        </motion.h2>

        <motion.button
          onClick={handleMenuClick}
          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{
            delay:1.8,
            duration:0.5
          }}
        >
          <motion.div
            whileHover={{scale:1.2}}
            whileTap={{scale:0.8}}
            className="px-2  text-sm font-light font-body rounded-full bg-[#7a5f55] py-3 border-2 sm:px-3 sm:py-2  dark:bg-[#86C232]  "

          >
            LOOK MENU
          </motion.div>
        </motion.button>
</div>
    
    </section>
  );
};

export default HeroSection;

