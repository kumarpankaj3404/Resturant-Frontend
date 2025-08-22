
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";


import Menu from "../pages/Menu";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:categories" element={<Menu />} />
      </Routes>
    

}
