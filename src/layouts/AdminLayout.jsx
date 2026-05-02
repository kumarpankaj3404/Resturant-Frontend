// src/layouts/AdminLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Admin Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <Outlet />
      </div>

    </div>
  );
}