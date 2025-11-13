

import React, { useState, useEffect, useRef } from "react"; 
import { useNavigate, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { NAV_LINKS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectThemeMode } from "../../features/theme/themeSlice";
import logo from "../../assets/logo.png";
import { Badge } from 'primereact/badge';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);
  const isDark = mode === "dark";

  const items = useSelector((state) => state.cart.items);
  const arr = Object.values(items);
  let total = 0;
  arr.forEach((item) => {
    total += item.qty;
  });

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <nav
      className={`sticky top-0 left-0 z-50 w-full px-4 py-4 font-bold bg-black/25 dark:bg-black/75 backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative flex items-center justify-between mx-auto max-w-7xl h-14">
        <div className="flex items-center cursor-pointer" onClick={navigateHome}>
          <img
            src={logo}
            alt="Restaurant Logo"
            className="object-contain w-auto h-10"
          />
        </div>

        <div className="items-center hidden space-x-6 lg:flex font-body">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.text}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition-all duration-300 ${
                  isActive
                    ? "text-[#7a5f55] font-semibold"
                    : "text-black dark:text-white hover:text-[#7a5f55] dark:hover:text-[#86C232]"
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4 lg:space-x-6">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-1 text-yellow-400 dark:text-white hover:text-[#000000] dark:hover:text-[#86C232]"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="relative inline-flex items-center justify-center p-2 text-black dark:text-white hover:text-[#7a5f55] dark:hover:text-[#86C232]"
            aria-label="Cart"
          >
            <i className="text-2xl pi pi-shopping-cart"></i>
            {total > 0 && (
              <span className="absolute -top-1 -right-1">
                <Badge
                  value={total}
                  className="px-2 py-1 text-xs text-white bg-red-500 rounded-full shadow-md"
                />
              </span>
            )}
          </button>

          <button
            onClick={() => navigate("/profile")} 
            className="p-1 text-black dark:text-white hover:text-[#7a5f55] dark:hover:text-[#86C232]"
            aria-label="Profile"
            title="Profile"
          >
            <span className="text-lg pi pi-user"></span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 lg:hidden text-black dark:text-white hover:text-[#7a5f55] dark:hover:text-[#86C232]"
            aria-label="Menu"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-2 border-t border-gray-200 rounded-md shadow-md dark:border-gray-700 lg:hidden bg-white/70 dark:bg-black/70 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.text}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm ${
                  isActive
                    ? "text-[#7a5f55] font-semibold"
                    : "text-gray-700 dark:text-gray-200 hover:bg-[#7a5f55] hover:text-white dark:hover:bg-[#86C232]"
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;