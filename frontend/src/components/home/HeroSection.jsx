import React from "react";
import { HERO_SECTION, IMAGES } from "../../utils/constants";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { easeInOut, easeOut, motion } from "motion/react";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate("/menu");
  };

  return (
    <section
      aria-label="Hero Section"
      className="relative flex items-center justify-center h-screen px-4 bg-fixed bg-center bg-cover sm:px-6 md:px-0"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.35)
        ), url(${IMAGES.heroBackground})`,
      }}
    >
      <div className="z-10 max-w-4xl text-4xl font-bold text-center text-white text-outline">
        <motion.h1
          tabIndex={0}
          className="mb-8 courggete font-bold tracking-widest uppercase sm:text-xl md:text-5xl  dark:text-white-shadow"
          initial={{y: -150,opacity:0}}
          animate={{
            y:0,
            opacity:1,
          }}
          transition={{
            duration:1
          }}
        >
          {HERO_SECTION.title}
        </motion.h1>

        <motion.h2
          tabIndex={0}
          className="mb-14 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl font-heading dark:text-white-shadow"
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
          {HERO_SECTION.subtitle}
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
            className="px-2  text-sm font-light font-body rounded-full bg-red-500 py-3 border-2 sm:px-3 sm:py-2   "

          >
            LOOK MENU
          </motion.div>
        </motion.button>
</div>
    
    </section>
  );
};

export default HeroSection;

