import React from "react";
import { HERO_SECTION, IMAGES } from "../../utils/constants";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

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
  <h1
    tabIndex={0}
    className="mb-4 text-lg font-light tracking-widest uppercase sm:text-xl md:text-2xl font-heading dark:text-white-shadow"
  >
    {HERO_SECTION.title}
  </h1>

  <h2
    tabIndex={0}
    className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl font-heading dark:text-white-shadow"
  >
    {HERO_SECTION.subtitle}
  </h2>
  <Button
          onClick={handleMenuClick}
          variant="white"
          size="large"
          className="px-6 py-3 font-semibold transition-transform duration-300 sm:px-8 sm:py-4 hover:scale-105 font-heading"
          aria-label="Go to Menu"
        >
          {HERO_SECTION.buttonText}
        </Button>
</div>
    
    </section>
  );
};

export default HeroSection;

