import React from 'react';
import { ADDRESS_SECTION } from '../../utils/constants';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Address = () => {
  return (
    <section className="py-20 bg-gray-50 font-heading dark:bg-gray-900/10">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-black md:text-4xl ">
            {ADDRESS_SECTION.title}
          </h2>
        </div>

        {/* Cards container with vertical black divider, no shadow */}
        <div className="flex flex-col overflow-hidden rounded md:flex-row">
          
          {/* Left Card - Address */}
          <div className="flex-1 p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F6ECE3] dark:bg-[#222629] rounded-full">
                <MapPinIcon className="w-6 h-6 text-red-800 dark:text-[#86C232]" />
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold text-gray-900">Address</h3>
            <p className="text-gray-700">{ADDRESS_SECTION.address}</p>
          </div>

          {/* Vertical divider */}
          <div className="hidden w-px bg-black md:block"></div>

          {/* Right Card - Opening Hours */}
          <div className="flex-1 p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F6ECE3] dark:bg-[#222629] rounded-full">
                <ClockIcon className="w-6 h-6 text-red-800 dark:text-[#86C232]" />
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold text-gray-900">Opening Hours</h3>
            <div className="max-w-xs mx-auto space-y-3 text-left">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Monday - Friday</span>
                <span className="font-semibold text-gray-900">{ADDRESS_SECTION.openingHours.weekdays}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Saturday</span>
                <span className="font-semibold text-gray-900">{ADDRESS_SECTION.openingHours.saturday}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium text-gray-700">Sunday</span>
                <span className="font-semibold text-gray-900">{ADDRESS_SECTION.openingHours.sunday}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
