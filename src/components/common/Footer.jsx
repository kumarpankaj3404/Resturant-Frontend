
import React, { useState } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS, RESTAURANT_NAME, IMAGES } from '../../utils/constants';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Footer = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : 8)); 
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev < 8 ? prev + 1 : 0));
  };

  return (
    <footer className="text-white bg-black">
      
      <div className="px-6 py-4 mx-auto max-w-7xl sm:px-8 lg:px-12 ">
        <div className="grid sm:grid-cols-3 gap-x-12 gap-y-6">
          
          <div>
            <h1 className="font-serif text-4xl ">β𝓸ⓝ𝓭 𝐀ⓝ𝓭 βᎥT𝑒𝒮</h1>
            <p className='pt-3 pb-5 space-y-1 text-gray-300 text-md font-body'>“Crafting memories together, one bond, one bite at a time.”</p>
            <h3 className="mb-4 text-xl font-bold font-heading">CONTACT US</h3>
            <div className="max-w-md space-y-4 text-md">
              
              <div className="flex items-start gap-3 font-body">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#bd9a8d]/20 dark:bg-[#86C232]/20">
                  <PhoneIcon className="w-5 h-5 text-[#bd9a8d] dark:text-[#86C232]" />
                </div>
                <p>{CONTACT_INFO.phone}</p>
              </div>
          
              <div className="flex items-start gap-3 font-body">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#bd9a8d]/20 dark:bg-[#86C232]/20">
                  <EnvelopeIcon className="w-5 h-5 text-[#bd9a8d] dark:text-[#86C232]" />
                </div>
                <p>{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>
          <div>
            
            <div>
  <h4 className="mb-4 text-xl font-bold font-heading">OPENING HOURS</h4>
  <ul className="space-y-2 text-gray-300 text-md font-body">
    <li className="flex justify-between pb-1 border-b border-gray-600">
      <span>Weekdays</span>
      <span>{CONTACT_INFO.openingHours.weekdays}</span>
    </li>
    <li className="flex justify-between pb-1 border-b border-gray-600">
      <span>Saturday</span>
      <span>{CONTACT_INFO.openingHours.saturday}</span>
    </li>
    <li className="flex justify-between">
      <span>Sunday</span>
      <span>{CONTACT_INFO.openingHours.sunday}</span>
    </li>
  </ul>
</div>

            <h4 className="mt-5 mb-4 text-xl font-bold font-heading">OUR ADDRESS</h4>
              <div className="flex items-start gap-3 pb-5 space-y-1 text-gray-300 font-body text-md">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#bd9a8d]/20 dark:bg-[#86C232]/20">
                  <MapPinIcon className="w-5 h-5 text-[#bd9a8d] dark:text-[#86C232]" />
                </div>
                <p>{CONTACT_INFO.address}</p>
              </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="mb-4 text-xl font-bold font-heading">GALLERY</h3>
            <div className="grid grid-cols-3 gap-2">
              {IMAGES.galleryImages.slice(0, 9).map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer aspect-square group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative w-[520px] max-w-full p-4 bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES.galleryImages[selectedImageIndex]}
              alt="Selected"
              className="w-full h-[520px] object-contain rounded-lg shadow-lg"
            />

            
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-0 text-4xl text-white transition -top-10 hover:text-[#bd9a8d] "
              aria-label="Close modal"
            >
              ×
            </button>

           
            <button
              onClick={handlePrevImage}
              className="absolute p-3 transition -translate-y-1/2 rounded-full -left-10 top-1/2 bg-white/20 hover:bg-white/40"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="text-white w-7 h-7" />
            </button>

            
            <button
              onClick={handleNextImage}
              className="absolute p-3 transition -translate-y-1/2 rounded-full -right-10 top-1/2 bg-white/20 hover:bg-white/40"
              aria-label="Next image"
            >
              <ChevronRightIcon className="text-white w-7 h-7" />
            </button>
          </div>
        </div>
      )}

      <div className="border-t border-[#bd9a8d]">
        <div className="flex flex-col items-center justify-between gap-4 px-6 py-4 mx-auto max-w-7xl sm:flex-row">
          <div className="flex space-x-6 font-body">
            <a
              href={SOCIAL_LINKS.facebook}
              className="flex items-center transition hover:text-[#bd9a8d] hover:dark:text-[#86C232]"
            >
              <FaFacebookF className="w-5 h-5 mr-1" />
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              className="flex items-center transition hover:text-[#bd9a8d] hover:dark:text-[#86C232]"
            >
              <FaTwitter className="w-5 h-5 mr-1" />
              Twitter
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              className="flex items-center transition hover:text-[#bd9a8d] hover:dark:text-[#86C232]"
            >
              <FaInstagram className="w-5 h-5 mr-1" />
              Instagram
            </a>
          </div>
          <div className="text-xs text-center text-[#f4f3f3] sm:text-sm sm:text-left font-body">
            © 2025 {RESTAURANT_NAME} . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
