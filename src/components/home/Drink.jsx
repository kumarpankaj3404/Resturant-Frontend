
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DRINK_SECTION, IMAGES } from '../../utils/constants';
import {animate, motion} from "motion/react";

const Drink = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <section className="w-full flex flex-col-reverse md:flex-row min-h-[50vh] md:h-[50vh]">

      {/* Left Image */}
      <div className="w-full md:w-1/2 h-[50vh]">
        <img
          src={IMAGES.drinkImage}
          alt="Refreshing Drink"
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center w-full px-4 py-8 space-y-4 text-left sm:px-6 md:px-12 lg:px-24 bg-white md:w-1/2 h-[50vh] dark:bg-[#6B6E70]">
      <motion.div 
          initial={{ opacity: 0, x: +10 }}
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
            {DRINK_SECTION.title}
          </h1>
        </motion.div>
        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100 sm:text-xl md:text-2xl font-heading">
          {DRINK_SECTION.subtitle}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base md:text-lg font-body">
          {DRINK_SECTION.description}
        </p>
        <div className="pt-2">
          <button
            className="px-6 py-2 text-black transition border border-black hover:bg-red-800  dark:text-white dark:border-white hover:text-white font-body dark:hover:bg-[#86C232] dark:hover:text-black"
            onClick={handleClick}
          >
            {DRINK_SECTION.buttonText}
          </button>
        </div>
      </div>

    </section>
  );
};

export default Drink;
