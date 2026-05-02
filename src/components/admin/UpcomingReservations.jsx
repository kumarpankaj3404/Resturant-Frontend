import React from "react";

const reservations = [
  { id: 1, name: "Rahul Sharma", guests: 3, time: "7:30 PM" },
  { id: 2, name: "Ananya Gupta", guests: 2, time: "8:00 PM" },
  { id: 3, name: "Rohit Verma", guests: 4, time: "8:30 PM" },
  { id: 4, name: "Priya Singh", guests: 5, time: "9:00 PM" },
  { id: 5, name: "Aman Yadav", guests: 2, time: "9:15 PM" }
];

const UpcomingReservations = () => {
  return (
    <div className="bg-white/95 rounded-xl shadow-md p-5 hover:shadow-lg transition">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold font-heading text-gray-800">
          Upcoming Reservations
        </h2>

        <button className="text-sm text-blue-600 hover:underline">
          Go to →
        </button>
      </div>

      {/* Reservation List */}
      <div className="space-y-3 font-body font-bold">

        {reservations.map((res) => (
  <div
    key={res.id}
    className="flex items-center border-b pb-2 text-sm"
  >

    {/* Name - Left */}
    <span className="w-1/3 font-medium">
      {res.name}
    </span>

    {/* Guests - Center */}
    <span className="w-1/3 text-center text-gray-500">
      {res.guests} guests
    </span>

    {/* Time - Right */}
    <span className="w-1/3 text-right text-blue-600">
      {res.time}
    </span>

  </div>
))}

      </div>

    </div>
  );
};

export default UpcomingReservations;