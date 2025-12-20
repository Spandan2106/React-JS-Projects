import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'
import ThemeProvider from './contexts/ThemeContext.jsx'
import AuthProvider, { useAuth } from './contexts/AuthContext.jsx'
import Navbar from './components/Navbar.jsx'
import Feed from './pages/Feed.jsx'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

// ProtectedRoute component for authentication
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

// Redirect to feed if logged in, otherwise to login
const Root = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/feed" /> : <Navigate to="/login" />;
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <AuthProvider>
            <div className="min-h-screen">
              <Navbar />
              <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App