
import React, { useState } from "react";
import {
  RESERVATION_SECTION,
  RESERVATION_TIMES_FROM,
  RESERVATION_TIMES_TO,
  PEOPLE_OPTIONS,
  IMAGES,
} from "../utils/constants";
import Button from "../components/common/Button";
import InputField from "../components/reservation/InputField";
import SelectField from "../components/reservation/SelectField";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeFrom: "",
    timeTo: "",
    people: "",
    date: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.timeFrom && formData.timeTo) {
      const fromIndex = RESERVATION_TIMES_FROM.findIndex(
        (t) => t.value === formData.timeFrom
      );
      const toIndex = RESERVATION_TIMES_TO.findIndex(
        (t) => t.value === formData.timeTo
      );
      if (toIndex <= fromIndex) {
        alert("Please select a 'To' time later than 'From' time.");
        return;
      }
    }

    alert("Reservation submitted successfully! We will contact you shortly.");
    setFormData({
      name: "",
      phone: "",
      timeFrom: "",
      timeTo: "",
      people: "",
      date: "",
      email: "",
    });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      
    >
      
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="w-full h-20 bg-[#48352f]"></div>
      <div
        aria-label="Reservation Section"
      className="relative flex flex-col w-full min-h-screen bg-fixed bg-center bg-contain"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.35)
        ), url(${IMAGES.reserve})`,
      }}>
     
    
      <div className="relative flex items-center justify-center flex-1 w-full">
        
        
        <div className="flex flex-col justify-center items-center flex-1 max-w-3xl h-auto bg-white/70 dark:bg-[#6d6e6f]/70 backdrop-blur-md overflow-y-auto p-10 rounded-2xl shadow-2xl m-8">
          <div className="px-4 mb-6 text-center font-heading sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#583f36] dark:text-[#86C232]">
              {RESERVATION_SECTION.title}
            </h2>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-100">
              {RESERVATION_SECTION.subtitle}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl px-4 space-y-6 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 font-body">
              <InputField
                id="name"
                name="name"
                label={RESERVATION_SECTION.formFields.name}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
                className="sm:col-span-2"
              />

              <InputField
                id="phone"
                name="phone"
                label={RESERVATION_SECTION.formFields.phone}
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 12345 67890"
                required
                className="sm:col-span-2"
              />

              <SelectField
                id="timeFrom"
                name="timeFrom"
                label="Time From"
                value={formData.timeFrom}
                onChange={handleInputChange}
                options={RESERVATION_TIMES_FROM}
                placeholder="Time From"
                required
              />

              <SelectField
                id="timeTo"
                name="timeTo"
                label="Time To"
                value={formData.timeTo}
                onChange={handleInputChange}
                options={RESERVATION_TIMES_TO}
                placeholder="Time Till"
                required
              />

              <SelectField
                id="people"
                name="people"
                label={RESERVATION_SECTION.formFields.people}
                value={formData.people}
                onChange={handleInputChange}
                options={PEOPLE_OPTIONS}
                placeholder={`Select ${RESERVATION_SECTION.formFields.people}`}
                required
              />

              <InputField
                id="date"
                name="date"
                label={RESERVATION_SECTION.formFields.date}
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={today}
              />

              <InputField
                id="email"
                name="email"
                label={`${RESERVATION_SECTION.formFields.email} (optional)`}
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                required={false}
                className="sm:col-span-2"
              />

              <div className="sm:col-span-2">
                <p className="text-sm italic text-gray-600 font-body dark:text-gray-200">
                  To cancel, please call us directly.
                </p>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full hover:text-gray-100 hover:bg-[#7f6257] font-body dark:bg-[#82c91e] dark:text-black"
              >
                {RESERVATION_SECTION.buttonText}
              </Button>
            </div>
          </form>
        </div>
      </div>
       </div>
    </section>
  );
};

export default ReservationSection;




