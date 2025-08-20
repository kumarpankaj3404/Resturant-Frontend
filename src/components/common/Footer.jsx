
import React, { useState } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS,RESTAURANT_NAME, IMAGES } from '../../utils/constants';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : 8)); // last index is 8 for 9 images
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev < 8 ? prev + 1 : 0));
  };

  return (
    <footer className="text-white bg-[#48352f]">
      <div className="px-6 py-12 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-2xl font-bold font-heading">CONTACT US</h3>
            <div className="max-w-md space-y-6 text-base">
              <div className="flex items-start gap-4 font-body">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#bd9a8d]/20 dark:bg-[#86C232]/20">
                  <MapPinIcon className="w-6 h-6 text-[#bd9a8d] dark:text-[#86C232]" />
                </div>
                <p>{CONTACT_INFO.address}</p>
              </div>
              <div className="flex items-start gap-4 font-body">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#bd9a8d]/20 dark:bg-[#86C232]/20">
                  <PhoneIcon className="w-6 h-6 text-[#bd9a8d] dark:text-[#86C232] " />
                </div>
                <p>{CONTACT_INFO.phone}</p>
              </div>
              <div className="flex items-start gap-4 font-body">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#bd9a8d]/20 dark:bg-[#86C232]/20">
                  <EnvelopeIcon className="w-6 h-6 text-[#bd9a8d] dark:text-[#86C232]" />
                </div>
                <p>{CONTACT_INFO.email}</p>
              </div>

              {/* Added margin-top here for spacing */}
              
                <h4 className="mb-6 text-2xl font-bold font-heading">OPENING HOURS</h4>
                <ul className="space-y-1 text-gray-300 font-body">
                  <li>Weekdays:  {CONTACT_INFO.openingHours.weekdays}</li>
                  <li>Saturday: {CONTACT_INFO.openingHours.saturday}</li>
                  <li>Sunday: {CONTACT_INFO.openingHours.sunday}</li>
                </ul>
              
            </div>
          </div>

          {/* Gallery with smaller images */}
          <div>
            <h3 className="mb-6 text-2xl font-bold font-heading">GALLERY</h3>
            <div className="grid max-w-md grid-cols-3 gap-3">
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

      {/* Modal */}
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

            {/* Close button - top right outside image */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-0 text-4xl text-white transition -top-10 hover:text-[#bd9a8d] "
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Prev button - left center outside image */}
            <button
              onClick={handlePrevImage}
              className="absolute p-3 transition -translate-y-1/2 rounded-full -left-10 top-1/2 bg-white/20 hover:bg-white/40"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="text-white w-7 h-7" />
            </button>

            {/* Next button - right center outside image */}
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

      {/* Bottom Bar */}
      <div className="border-t border-[#bd9a8d]">
  <div className="flex flex-col items-center justify-between gap-4 px-6 py-5 mx-auto max-w-7xl sm:flex-row">
    <div className="flex space-x-6 font-body">
      <a href={SOCIAL_LINKS.facebook} className="flex items-center transition hover:text-[#bd9a8d] hover:dark:text-[#86C232]">
        <FaFacebookF className="w-5 h-5 mr-1" />
        Facebook
      </a>
      <a href={SOCIAL_LINKS.twitter} className="flex items-center transition hover:text-[#bd9a8d] hover:dark:text-[#86C232]">
        <FaTwitter className="w-5 h-5 mr-1" />
        Twitter
      </a>
      <a href={SOCIAL_LINKS.instagram} className="flex items-center transition hover:text-[#bd9a8d] hover:dark:text-[#86C232]">
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

