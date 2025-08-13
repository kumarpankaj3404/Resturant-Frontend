
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EAT_SECTION, IMAGES } from '../../utils/constants';
import {animate, motion} from "motion/react";

const Eat = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <section className="w-full flex flex-col md:flex-row min-h-[50vh] md:h-[50vh]">

      {/* Left Content */}
      <div className="flex flex-col justify-center w-full px-4 py-8 sm:px-6 md:px-12 lg:px-24 space-y-4 text-left bg-[#F6ECE3] dark:bg-[#222629] md:w-1/2 h-[50vh]">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={
            { opacity: 1,
               x: 0,
               transition:{
                 type: "spring",
                 stiffness: 300,
                 damping:12,
                 duration:1
                 }
            }}
          viewport={{once:true}}
        >
          <h1 className="text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl font-heading">
            {EAT_SECTION.title}
          </h1>
        </motion.div>
        
        <h2 className="text-lg font-medium text-gray-800 sm:text-xl md:text-2xl font-heading dark:text-gray-200">
          {EAT_SECTION.subtitle}
        </h2>
        <p className="text-sm text-gray-600 sm:text-base md:text-lg font-body dark:text-gray-300">
          {EAT_SECTION.description}
        </p>
        <div className="pt-2">
          <motion.button
            className="px-6 py-2 text-black dark:text-white dark:border-white transition border border-black hover:bg-red-800 hover:text-white font-body dark:hover:bg-[#86C232] dark:hover:text-black"
            onClick={handleClick}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.8}}
            animate={{duration:0.2}}
          >
            {EAT_SECTION.buttonText}
          </motion.button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-[50vh]">
        <img
          src={IMAGES.eatImage}
          alt="Eat Delicious"
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>

    </section>
  );
};

export default Eat;
