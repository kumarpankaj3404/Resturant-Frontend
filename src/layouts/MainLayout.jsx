// src/layouts/MainLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout({ onLoginClick }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar */}
      <Navbar onLoginClick={onLoginClick} />

      {/* Page Content */}
      <main className="flex-grow min-h-[80vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}