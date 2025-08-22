
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { RESTAURANT_NAME, NAV_LINKS } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectThemeMode } from '../../features/theme/themeSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);
  const isDark = mode === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(!(currentScrollY > lastScrollY.current && currentScrollY > 50));
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateHome = () =>{
    navigate("/");
  }

  return (
    <nav


      className={`fixed top-0  left-0 w-full z-50 px-4 py-4 shadow-sm backdrop-blur-md transition-transform duration-300 ${

        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-white/70 dark:bg-black/70`}
    >
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-[#7a5f55] dark:bg-[#86C232]"></div> */}

      <div className="relative flex items-center justify-between mx-auto max-w-7xl">
        <div className="text-xl font-bold ">
          <div
           className="px-4 py-2 cursor-pointer text-[#7a5f55] dark:text-[#86C232] bg-white border-2 border-gray-500 rounded-full dark:bg-black font-body"
            onClick={navigateHome}
            
          >
            {RESTAURANT_NAME}
          </div>
        </div>

        <div className="items-center hidden space-x-6 lg:flex font-body" >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.text}
              to={link.path}
              className="text-sm font-bold text-black dark:text-white  transition-all duration-300  hover:text-[#7a5f55] dark:hover:text-[#86C232]"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 lg:space-x-6 ">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-1 text-black dark:text-white hover:text-[#7a5f55] dark:hover:text-[#86C232]"
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>

          <button
            onClick={() => navigate('/cart')}
            className="p-1 text-black dark:text-white hover:text-[#7a5f55] dark:hover:text-[#86C232]"
            aria-label="Cart"
          >
            <ShoppingCartIcon className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigate('/profile')}
            className="p-1 text-black dark:text-white hover:text-[#7a5f55] dark:hover:text-[#86C232]"
            aria-label="Profile"
          >
            <UserCircleIcon className="w-6 h-6" />
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
            <Link
              key={link.text}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-[#7a5f55] hover:text-white dark:hover:bg-[#86C232]"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
