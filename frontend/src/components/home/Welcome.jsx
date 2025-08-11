
import { useNavigate } from "react-router-dom";
import { WELCOME_SECTION, IMAGES } from "../../utils/constants";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <section className="flex flex-col-reverse items-center w-full min-h-screen px-4 py-10 bg-red-800 sm:px-6 md:flex-row md:px-10 lg:px-24 dark:bg-[#61892F]">

      {/* Left Image */}
      <div className="w-full mt-10 md:mt-0 md:w-1/2 md:mr-10">
        <img
          src={IMAGES.aboutImage}
          alt="About Section"
          loading="lazy"
          className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Right Content */}
      <div className="w-full space-y-5 text-center text-white md:w-1/2 md:text-left">
        <p className="text-xs font-bold tracking-widest uppercase sm:text-sm font-heading">{WELCOME_SECTION.type}</p>
        <h1 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl font-heading">
          {WELCOME_SECTION.title}
        </h1>
        <p className="text-sm text-gray-200 sm:text-base md:text-lg font-body">{WELCOME_SECTION.description}</p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={handleClick}
            aria-label="Learn more about us"
            className="px-5 py-2 transition duration-300 border border-white font-body hover:bg-white hover:text-black"
          >
            {WELCOME_SECTION.buttonText}
          </button>
        </div>
      </div>

    </section>
  );
};

export default Welcome;
