import OrderStats from "./OrderStats";
import OrderTable from "./OrderTable";
import OrderFilters from "./OrderFilters";

const OrdersPage = () => {
  return (
    <div className="p-6 space-y-6">
      
      {/* Stats */}
      <OrderStats />

      {/* Filters */}
      <OrderFilters />

      {/* Table */}
      <OrderTable />
      
    </div>
  );
};

export default OrdersPage;