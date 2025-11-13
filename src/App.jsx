
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/common/Footer';
import { motion } from "framer-motion";
import { RESTAURANT_NAME } from "./utils/constants";
import 'primeicons/primeicons.css';
import LoginModal from './components/profile/LoginModal';
import ProfilePage from './components/profile/ProfilePage';

function AppContent() {
  const [showWelcome, setShowWelcome] = useState(!sessionStorage.getItem('hasVisited'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (showWelcome) {
      sessionStorage.setItem('hasVisited', 'true');
      const timer = setTimeout(() => setShowWelcome(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const openLoginModal = () => setIsModalOpen(true);
  const closeLoginModal = () => setIsModalOpen(false);

  const handleLoginSuccess = (userData) => {
    const userInfo = userData || { name: 'Guest', email: '', role: 'user' };
    setIsLoggedIn(true);
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo)); 
    closeLoginModal();
    navigate('/profile');
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user'); 
    navigate('/');
  };

  return (
    <>
      {showWelcome ? (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 50 }}
          transition={{ delay: 2, duration: 2 }}
        >
          <div className="z-10 font-bold text-center text-white bg-black h-screen flex flex-col justify-center items-center">
            <motion.h1
              className="mb-8 tracking-widest uppercase font-heading sm:text-xl md:text-5xl dark:text-white-shadow"
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to
            </motion.h1>
            <motion.h2
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
        <>
          <Navbar onLoginClick={openLoginModal} />
          <main className="min-h-[80vh]">
            <Routes>
              <Route path="/*" element={<AppRoutes onLoginClick={openLoginModal} />} />
              {isLoggedIn && (
                <Route
                  path="/profile"
                  element={<ProfilePage onLogout={handleLogout} user={user} />}
                />
              )}
            </Routes>
          </main>
          <Footer />
          {isModalOpen && (
            <LoginModal
              onClose={closeLoginModal}
              onLoginSuccess={handleLoginSuccess}
            />
          )}
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
