import OrderRow from "./OrderRow";

const OrderTable = () => {
  const orders = [
    {
      id: "ORD-1284",
      customer: "John Smith",
      items: "Burger Combo x2, Fries",
      date: "Mar 21, 2026",
      status: "Pending",
      amount: "$28.50",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <OrderRow key={index} order={order} />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default OrderTable;