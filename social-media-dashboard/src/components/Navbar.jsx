import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { setSearchQuery } from '../store/index.js';

// A more stylish toggle switch
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
        } absolute w-full h-full rounded-full transition-colors`}
      ></span>
      <span
        className={`${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
      ></span>
    </button>
  );
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const dispatch = useDispatch();

  const activeLinkStyle = {
    fontWeight: 'bold',
    color: '#3b82f6', // blue-500
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 sticky top-0 z-10">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <NavLink to="/feed" className="text-xl font-bold text-gray-900 dark:text-white">
              SocialIO
            </NavLink>
            {user && (
              <div className="flex items-center space-x-4">
                <div className="hidden md:block relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                    className="w-48 px-3 py-1 text-sm text-gray-700 bg-gray-100 border-transparent rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:bg-gray-600"
                  />
                </div>
                <div className="hidden md:flex items-center space-x-4">
                <NavLink
                  to="/feed"
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-500 dark:text-gray-300 dark:hover:text-white"
                >
                  Feed
                </NavLink>
                <NavLink
                  to="/profile"
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-500 dark:text-gray-300 dark:hover:text-white"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/settings"
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-500 dark:text-gray-300 dark:hover:text-white"
                >
                  Settings
                </NavLink>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-white">YT</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-white">IG</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">FB</a>

            <ThemeToggle />

            {user && (
              <button
                onClick={logout}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}