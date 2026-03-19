

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../features/auth/authSlice"; // adjust path
import { useEffect } from "react";
import { IoRestaurant } from 'react-icons/io5'; 
import { useNavigate, useLocation } from "react-router-dom";
const Avtar = ({ onLoginClick }) => {
  const navigate = useNavigate();
const location = useLocation();
const isAuthenticated = useSelector(selectIsAuthenticated);

useEffect(() => {
  if (isAuthenticated) {
    navigate(location.state?.from || "/");
  }
}, [isAuthenticated, navigate, location]);

  return (

    <div className="relative flex flex-col min-h-screen bg-[#f9f6f2] dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200 overflow-hidden">

      <main className="flex-1 flex flex-col justify-center items-center text-center p-8 z-10">
        

        <div className="w-[200px] h-[200px] rounded-full border-4 border-[#c0a06c] dark:border-yellow-600 flex justify-center items-center mb-6">

          <div className="w-[150px] h-[150px] rounded-full bg-white dark:bg-gray-800 border-[6px] border-[#d4e9e2] dark:border-gray-700 flex justify-center items-center shadow-lg">
            <div className="w-[80px] h-[80px] rounded-full bg-black dark:bg-gray-700 flex justify-center items-center text-white text-4xl">
              <IoRestaurant />
            </div>
          </div>
        </div>
    
        <h1 className="text-3xl font-semibold mb-6 dark:text-white font-heading">Welcome to Bond And Bites</h1>
        
        <button 
          onClick={onLoginClick} 
   
          className="bg-black text-white dark:bg-white dark:text-black py-3 px-6 rounded-full text-base font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80 font-body"
        >
          Login or Sign Up
        </button>
      </main>

      <footer className="h-[50px] bg-[#8b6c43] dark:bg-neutral-800 w-full z-10"></footer>
    </div>
  );
};

export default Avtar;