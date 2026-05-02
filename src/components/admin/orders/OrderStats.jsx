
const stats = [
  { title: "Total Orders", value: 1284 },
  { title: "Pending", value: 4 },
  { title: "Preparing", value: 8 },
  { title: "Delivered", value: 11 },
];

const OrderStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">{item.title}</p>
          <h2 className="text-2xl font-bold">{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default OrderStats;