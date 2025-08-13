
import React, { useState } from 'react';
import { RESERVATION_SECTION, IMAGES, RESERVATION_TIMES_FROM,RESERVATION_TIMES_TO, PEOPLE_OPTIONS } from '../../utils/constants';
import Button from '../common/Button';
import InputField from '../reservation/InputField';
import SelectField from '../reservation/SelectField';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    timeFrom: '',
    timeTo: '',
    people: '',
    date: '',
    email: '',
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

    // Validate time range
    if (formData.timeFrom && formData.timeTo) {
      const fromIndex = RESERVATION_TIMES_FROM.findIndex((t) => t.value === formData.timeFrom);
      const toIndex = RESERVATION_TIMES_TO.findIndex((t) => t.value === formData.timeTo);
      if (toIndex <= fromIndex) {
        alert("Please select a 'To' time later than 'From' time.");
        return;
      }
    }

    alert('Reservation submitted successfully! We will contact you shortly.');

    setFormData({
      name: '',
      phone: '',
      timeFrom: '',
      timeTo: '',
      people: '',
      date: '',
      email: '',
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="flex py-16 bg-[#F6ECE3] sm:py-24 font-body dark:bg-[#6d6e6f]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <div className="order-2 lg:order-1">
          <div className="mb-8 text-center sm:col-span-2 font-heading">
    <h2 className="text-4xl font-bold text-red-800 dark:text-[#86C232]">{RESERVATION_SECTION.title}</h2>
    <p className="mt-2 text-lg text-gray-600 dark:text-white">{RESERVATION_SECTION.subtitle}</p>
  </div> 


            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder='Time From'
                  required
                />

                <SelectField
                  id="timeTo"
                  name="timeTo"
                  label="Time To"
                  value={formData.timeTo}
                  onChange={handleInputChange}
                  options={RESERVATION_TIMES_TO}
                  placeholder='Time Till'
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
                  <p className="text-sm italic text-gray-500 font-body dark:text-gray-100">To cancel, please call us directly.</p>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className="w-full bg-red-800 hover:text-black hover:bg-white font-body dark:bg-[#82c91e] dark:hover:bg-white dark:text-black"
                >
                  {RESERVATION_SECTION.buttonText}
                </Button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={IMAGES.reservationImage}
                alt="Elegant dining table"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-all duration-500 bg-black/0 group-hover:bg-black/10"></div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
