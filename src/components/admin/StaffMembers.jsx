import React from "react";

const staffMembers = [
  { id: 1, staffId: "STF101", name: "Rahul", role: "Chef" },
  { id: 2, staffId: "STF102", name: "Priya", role: "Manager" },
  { id: 3, staffId: "STF103", name: "Aman", role: "Waiter" },
  { id: 4, staffId: "STF104", name: "Neha", role: "Reception" },
  { id: 5, staffId: "STF105", name: "Rohit", role: "Kitchen Staff" }
];

const StaffMembers = () => {
  return (
    <div className="bg-white/95 rounded-xl shadow-md p-5 hover:shadow-lg transition">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold font-heading text-gray-800">
          Staff Members
        </h2>

        <button className="text-sm text-blue-600 hover:underline">
          Go to →
        </button>
      </div>

      {/* Staff List */}
      <div className="space-y-3 font-body font-bold">

        

        {staffMembers.map((staff) => (
  <div
    key={staff.id}
    className="grid grid-cols-3 items-center border-b pb-2 text-sm"
  >

    {/* Staff ID - Left */}
    <span className="text-left font-medium">
      {staff.staffId}
    </span>

    {/* Name - Center */}
    <span className="text-center font-medium">
      {staff.name}
    </span>

    {/* Role - Right */}
    <span className="text-right text-red-500">
      {staff.role}
    </span>

  </div>
))}

      </div>

    </div>
  );
};

export default StaffMembers;