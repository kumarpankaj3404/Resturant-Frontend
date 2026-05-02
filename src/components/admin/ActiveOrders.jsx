import React from "react";

const orders = [
  { id: "ORD1021", table: 4, status: "Preparing" },
  { id: "ORD1022", table: 2, status: "Ready" },
  { id: "ORD1023", table: 6, status: "Cooking" },
  { id: "ORD1024", table: 3, status: "Preparing" },
  { id: "ORD1025", table: 1, status: "Ready" }
];

const ActiveOrders = () => {
  return (
    <div className="bg-white/95 rounded-xl shadow-md p-5 hover:shadow-lg transition">

      {/* Card Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold font-heading text-gray-800">
          Active Orders
        </h2>

        <button className="text-sm text-blue-600 hover:underline">
          Go to →
        </button>
      </div>

      {/* Orders List */}
      <div className="space-y-3 font-body font-bold">

        {orders.map((order) => (
  <div
    key={order.id}
    className="grid grid-cols-3 items-center border-b pb-2 text-sm"
  >

    {/* Order ID - Left */}
    <span className="text-left font-medium">
      {order.id}
    </span>

    {/* Table - Center */}
    <span className="text-center text-gray-500">
      Table {order.table}
    </span>

    {/* Status - Right */}
    <span className="text-right text-green-600">
      {order.status}
    </span>

  </div>
))}

      </div>

    </div>
  );
};

export default ActiveOrders;