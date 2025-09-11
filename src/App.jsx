import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/common/Footer';
import { motion } from "framer-motion"; // Corrected import
import { RESTAURANT_NAME } from "./utils/constants";

function App() {
  // Initialize state based on whether 'hasVisited' is in sessionStorage
  const [showWelcome, setShowWelcome] = useState(!sessionStorage.getItem('hasVisited'));

  useEffect(() => {
    // If the welcome screen is shown, set the flag in sessionStorage
    // and then hide the welcome screen after the animation completes.
    if (showWelcome) {
      sessionStorage.setItem('hasVisited', 'true');

      // Total animation time is delay (2s) + duration (2s) = 4s
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [showWelcome]); // Only run this effect when showWelcome changes

  return (
    <BrowserRouter>
      {showWelcome ? (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 50 }}
          transition={{ delay: 2, duration: 2 }}
        >
          <div className="z-10 font-bold text-center text-white max-w-10xl text-10xl text-outline bg-black h-screen flex flex-col justify-center items-center">
            <motion.h1
              tabIndex={0}
              className="mb-8 tracking-widest uppercase font-heading sm:text-xl md:text-5xl dark:text-white-shadow"
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to
            </motion.h1>

            <motion.h2
              tabIndex={0}
              className="text-3xl font-bold leading-tight mb-14 sm:text-4xl md:text-6xl font-heading dark:text-white-shadow"
              initial={{ y: +150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.75 }}
            >
              {RESTAURANT_NAME}
            </motion.h2>
          </div>
        </motion.div>
      ) : (
        <div>
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
