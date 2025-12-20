import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // Initialize user from localStorage to persist login state
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const login = (username, password) => {
    // IMPORTANT: This is a mock login. In a real app, you would make an API call.
    if (username === 'test' && password === 'password') {
      const userData = { username, name: 'Spandan Das', photoURL: null };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      navigate('/feed');
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const register = (username, name, password) => {
    // In a real app, you'd check if the username exists, hash the password, etc.
    const userData = { username, name, photoURL: null };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    navigate('/feed');
    return true;
  };

  const updateProfile = (data) => {
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = { user, login, logout, updateProfile, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;