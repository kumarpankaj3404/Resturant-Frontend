
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Reservation from "../pages/Reservation";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/reservation" element={<Reservation />} /> */}
    </Routes>
  );
}
