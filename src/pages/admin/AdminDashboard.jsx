import React from "react";
import { HiHome, HiBell } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ActiveOrders from "../../components/admin/ActiveOrders";
import UpcomingReservations from "../../components/admin/UpcomingReservations";
import StaffMembers from "../../components/admin/StaffMembers";
import  Sidebar  from "../../components/admin/Sidebar";
const AdminDashboard = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Sidebar/>
    </div>
  );
};

export default AdminDashboard;