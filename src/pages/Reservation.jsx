
import React, { useState } from "react";
import {
  RESERVATION_SECTION,
  RESERVATION_TIMES_FROM,
  RESERVATION_TIMES_TO,
  PEOPLE_OPTIONS,
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
    <div className="flex flex-col w-full h-screen">
      
      <div className="w-full h-20 bg-[#48352f]"></div>

      
      <div className="flex flex-1 w-full">
        {/* Reservation form */}
        <div className="flex flex-col justify-center items-center flex-1 h-full bg-white dark:bg-[#6d6e6f] overflow-y-auto">
          <div className="px-4 text-center font-heading sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#583f36] dark:text-[#86C232]">
              {RESERVATION_SECTION.title}
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-white">
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
                <p className="text-sm italic text-gray-500 font-body dark:text-gray-100">
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

        {/* Side image */}
        <div
          className="hidden h-full bg-center bg-cover lg:block lg:w-1/3"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/2b/30/ef/2b30ef12db7c0072e0bf18ab45aa3ae0.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ReservationSection;
