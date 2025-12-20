import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useTheme } from '../contexts/ThemeContext.jsx'

export default function Settings() {
  const { user, updateProfile } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [name, setName] = useState(user?.name || '')
  const [photoURL, setPhotoURL] = useState(user?.photoURL)

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoURL(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile({ name, photoURL })
    alert('Profile updated successfully!')
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="max-w-md p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
        
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Appearance</h3>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-800"
          >
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Profile Information</h3>

          <div className="flex items-center mb-6 space-x-4">
            <img
              className="object-cover w-16 h-16 rounded-full"
              src={photoURL || `https://ui-avatars.com/api/?name=${name}&background=random`}
              alt="Profile"
            />
            <div>
              <label
                htmlFor="photo-upload"
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
              >
                Change Photo
              </label>
              <input id="photo-upload" name="photo-upload" type="file" className="sr-only" onChange={handlePhotoChange} accept="image/*" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Display Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}