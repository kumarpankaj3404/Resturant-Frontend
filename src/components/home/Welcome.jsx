
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../utils/constants";
import {motion} from "motion/react"

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    
    <section className="flex flex-col-reverse items-center w-full min-h-screen px-4 py-10 space-x-10 bg-[#f7e7e2] sm:px-6 md:flex-row md:px-10 lg:px-24 dark:bg-gray-900">

      {/* Left Image */}
      
      <motion.div
        className="w-full mt-10 md:mt-0 md:w-1/2 md:mr-10"
        initial={{scale:0}}
        
        whileInView={{
          scale:1
        }}
        viewport={{once:true}}
      >
        <img
          src={IMAGES.aboutImage}
          alt="About Section"
          loading="lazy"
          className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </motion.div>

      {/* Right Content */}
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
          <p className="text-lg text-black sm:text-base md:text-lg font-body">
            Step into a world of authentic Indian flavors, where every dish is crafted with care and passion. Our chefs use the finest ingredients to create traditional recipes that celebrate India’s rich culinary heritage, offering you a dining experience full of warmth, aroma, and unforgettable taste.
          </p>
          <div className="flex justify-center md:justify-start">

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{x:500,opacity:0}}
            whileInView={{
              x:0,
              opacity:1,
              transition: {
              type: "spring",
              bounce: 0.6,
              duration: 1.4
              }
            }}
            viewport={{once:true}}
          >
            <button
              onClick={handleClick}
              aria-label="Learn more about us"
              className="px-5 py-2 transition  duration-300 border border-black font-body hover:bg-black dark:hover:bg-[#86C232] hover:text-white "
            >
             Our Story
            </button>

          </motion.button>

          </div>
      </motion.div>
    </section>
  );
};

export default Welcome;
