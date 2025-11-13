

import React, { useState } from 'react';

function LoginModal({ onClose, onLoginSuccess }) {

  const [view, setView] = useState('signup'); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('user'); 
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (view === 'signup') {
      const formData = { name, email, mobile: mobileNumber, role };
      if (role === 'admin') {
        formData.password = password;
      }
      console.log("Sending data to backend for Sign Up:", formData);
      onLoginSuccess(); 
    } 
    else {
      const loginData = { email, mobileNumber };
      console.log("Sending data to backend for Log In:", loginData);
      onLoginSuccess(); 
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative">
        <button 
          className="absolute top-6 right-8 font-bold text-gray-600 hover:text-gray-900 font-body" 
          onClick={onClose}
        >
          SKIP
        </button>

        <h3 className="text-2xl font-bold mb-5 font-heading">
          {view === 'signup' ? 'Sign Up' : 'Log In'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {view === 'signup' && (
            <>
              <div>
                <label htmlFor="name" className="text-xs font-bold text-gray-600">NAME</label>
                <input 
                  type="text" id="name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" 
                  className="w-full pt-2 pb-1 border-b border-gray-300 focus:outline-none focus:border-black text-lg font-body"
                  required
                />
              </div>

              <div>
                <label htmlFor="role" className="text-xs font-bold text-gray-600">ROLE</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pt-2 pb-1 bg-white border-b border-gray-300 focus:outline-none focus:border-black text-lg font-body font-semibold"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label htmlFor="email" className="text-xs font-bold text-gray-600">EMAIL</label>
            <input 
              type="email" id="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full pt-2 pb-1 border-b border-gray-300 focus:outline-none focus:border-black text-lg font-body"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile" className="text-xs font-bold text-gray-600">PHONE NUMBER</label>
            <input 
              type="tel" id="mobile" value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your phone number" 
              className="w-full pt-2 pb-1 border-b border-gray-300 focus:outline-none focus:border-black text-lg font-body"
              required 
            />
          </div>

          {(view === 'signup' && role === 'admin') && (
            <div>
              <label htmlFor="password" className="text-xs font-bold text-gray-600">PASSWORD</label>
              <input 
                type="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter a password" 
                className="w-full pt-2 pb-1 border-b border-gray-300 focus:outline-none focus:border-black text-lg"
                required
              />
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full py-3 bg-gray-700 text-white rounded-full font-bold text-lg cursor-pointer hover:bg-gray-800 pt-4"
          >
            {view === 'signup' ? 'Continue' : 'Log In'}
          </button>
        </form>
        
        <div className="text-center mt-4">
          {view === 'signup' ? (
            <p className="text-sm text-gray-600 font-body">
              Already have an account?{' '}
              <button
                type="button" 
                onClick={() => setView('login')}
                className="font-semibold text-gray-800 hover:underline focus:outline-none font-body"
              >
                Log In
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setView('signup')}
                className="font-bold text-gray-800 hover:underline focus:outline-none font-body"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
