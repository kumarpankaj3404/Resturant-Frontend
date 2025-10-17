
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Reservation from "../pages/Reservation"
// import Cart from "../pages/Cart";
// import Gallery from "../pages/Gallery"
// import Menu from "../pages/Menu";

// export default function AppRoutes() {
//   return (
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/menu/:categories" element={<Menu />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/gallery/:category" element={<Gallery />} />

//       </Routes>
//   )

// }
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import Cart from "../pages/Cart";
import Gallery from "../pages/Gallery";
import Menu from "../pages/Menu";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
      
      
      <Route path="/menu" element={<Navigate to="/menu/starters-snacks" />} />
      <Route path="/menu/:categories" element={<Menu />} />

      
      <Route path="/gallery" element={<Navigate to="/gallery/all" />} />
      <Route path="/gallery/:category" element={<Gallery />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}
