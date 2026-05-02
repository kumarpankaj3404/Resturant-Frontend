const getStatusColor = (status) => {
  if (status === "Pending") return "bg-yellow-100 text-yellow-600";
  if (status === "Preparing") return "bg-blue-100 text-blue-600";
  if (status === "Delivered") return "bg-green-100 text-green-600";
};

const OrderRow = ({ order }) => {
  return (
    <tr className="border-t">
      
      <td className="p-3 font-medium">#{order.id}</td>
      <td>{order.customer}</td>
      <td>{order.items}</td>
      <td>{order.date}</td>

      <td>
        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
          {order.status}
        </span>
      </td>

      <td>{order.amount}</td>

      <td>
        <button className="text-gray-500 hover:text-black">✏️</button>
      </td>

    </tr>
  );
};

export default OrderRow;