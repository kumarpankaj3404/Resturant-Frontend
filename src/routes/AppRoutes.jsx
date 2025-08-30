
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation"
import Cart from "../pages/Cart";

import Menu from "../pages/Menu";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/menu/:categories" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
  )

}
