
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import Reservation from "../pages/Reservation";
// import Cart from "../pages/Cart";
// import Gallery from "../pages/Gallery";
// import Menu from "../pages/Menu";
// import About from "../pages/About";

// import Avtar from "../components/profile/avtar";
// import AdminDashboard from "../pages/admin/AdminDashboard";

// export default function AppRoutes({ onLoginClick }) {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route
//       path="/reservation"
//       element={<Reservation onLoginClick={onLoginClick} />}/>
      
      
//       <Route path="/menu" element={<Navigate to="/menu/starters-snacks" />} />
//       <Route path="/menu/:categories" element={<Menu />} />

      
//       <Route path="/gallery" element={<Navigate to="/gallery/all" />} />
//       <Route path="/gallery/:category" element={<Gallery />} />

//       <Route path="/cart" element={<Cart />} />
//       <Route path="/about" element={<About/>}/>

//       <Route path="/profile" element={<Avtar onLoginClick={onLoginClick} />}/>
//       <Route path="/admindashboard" element={<AdminDashboard/>}/>
      
//     </Routes>
//   );
// }

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Pages
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import Cart from "../pages/Cart";
import Gallery from "../pages/Gallery";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Avtar from "../components/profile/avtar";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AppRoutes({ onLoginClick }) {
  return (
    <Routes>

      {/* ✅ MAIN LAYOUT (Navbar + Footer) */}
      <Route element={<MainLayout onLoginClick={onLoginClick} />}>

        <Route path="/" element={<Home />} />

        <Route
          path="/reservation"
          element={<Reservation onLoginClick={onLoginClick} />}
        />

        <Route path="/menu" element={<Navigate to="/menu/starters-snacks" />} />
        <Route path="/menu/:categories" element={<Menu />} />

        <Route path="/gallery" element={<Navigate to="/gallery/all" />} />
        <Route path="/gallery/:category" element={<Gallery />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/profile"
          element={<Avtar onLoginClick={onLoginClick} />}
        />

      </Route>

      {/* ✅ ADMIN LAYOUT (Sidebar ONLY, NO Navbar/Footer) */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* Default redirect */}
        <Route index element={<Navigate to="dashboard" />} />

        <Route path="dashboard" element={<AdminDashboard />} />

      </Route>

    </Routes>
  );
}