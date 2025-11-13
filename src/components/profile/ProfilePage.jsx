
import React, { useState } from "react";
import { IoChevronForward, IoRestaurant, IoArrowBack } from "react-icons/io5";


const ProfilePage = ({ onLogout, user }) => {
  const [activeView, setActiveView] = useState("menu");

  const renderCardContent = () => {
    switch (activeView) {

      case "history":
        return (
          <div>

            <div className="flex items-center mb-4">
              <button
                onClick={() => setActiveView("menu")}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
              >
                <IoArrowBack size={22} />
              </button>
              <h2 className="text-xl font-semibold dark:text-white font-body">Order History</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 font-body">
              You have no recent orders.
            </p>
          </div>
        );

      case "details":
        return (
          <div>

            <div className="flex items-center mb-4">
              <button
                onClick={() => setActiveView("menu")}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
              >
                <IoArrowBack size={22} />
              </button>
              <h2 className="text-xl font-semibold dark:text-white font-heading">My Details</h2>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 font-body">NAME</label>
                <p className="text-lg capitalize font-body">{user?.name || "Not available"}</p>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 font-body">EMAIL</label>
                <p className="text-lg font-body">{user?.email || "Not available"}</p>
              </div>
              <div>

                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 font-body ">PHONE</label>
                <p className="text-lg font-body">{user?.mobile || "Not available"}</p>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 font-body">ROLE</label>
                <p className="text-lg capitalize font-body">{user?.role || "Not available"}</p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-3 dark:text-white font-heading">Account Settings</h2>
            
            <button
              onClick={() => setActiveView("history")}
              className="w-full flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700 text-left hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="text-lg">Order History</span>
              <IoChevronForward className="text-gray-500 dark:text-gray-400" />
            </button>
            
            <button
              onClick={() => setActiveView("details")}
              className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="text-lg">My Details</span>
              <IoChevronForward className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f6f2] dark:bg-gray-900 flex flex-col items-center py-10 font-sans text-gray-800 dark:text-gray-200">
      
      <div className="w-[120px] h-[120px] rounded-full bg-white dark:bg-gray-800 border-[6px] border-[#d4e9e2] dark:border-gray-700 flex justify-center items-center shadow-lg mb-6">
        <div className="w-[70px] h-[70px] rounded-full bg-black dark:bg-gray-700 flex justify-center items-center text-white text-4xl">
          <IoRestaurant />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-2 capitalize dark:text-white font-heading">
        {user?.name ? `Hi, ${user.name.split(" ")[0]}!` : "Your Profile"}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Welcome To Bond & Bites!</p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md w-11/12 md:w-1/2 p-6 mb-6 min-h-[200px]">
        {renderCardContent()}
      </div>

      <button
        onClick={onLogout}
        className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-bold hover:opacity-80 transition font-body"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;