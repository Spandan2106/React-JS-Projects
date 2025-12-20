import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser } from '../store/index.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function Profile() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const { user: loggedInUser } = useAuth()

  useEffect(() => {
    // Users already fetched in Feed
  }, [])

  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center p-6 mb-8 space-x-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img
          className="object-cover w-24 h-24 rounded-full"
          src={loggedInUser?.photoURL || `https://ui-avatars.com/api/?name=${loggedInUser?.name}&background=random&size=128`}
          alt="Profile"
        />
        <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome, {loggedInUser?.name || 'User'}!</h2>
        <p className="text-gray-600 dark:text-gray-400">@{loggedInUser?.username}</p>
      </div>
      </div>

      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Suggested Users</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center w-16 h-16 mb-2 text-xl font-bold text-gray-600 bg-gray-300 rounded-full dark:bg-gray-600 dark:text-gray-300">
              {user.name.charAt(0)}
            </div>
            <p className="font-semibold text-gray-800 dark:text-white">{user.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</p>
            <button
              onClick={() => dispatch(followUser(user.id))}
              className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={user.followed}
            >
              {user.followed ? 'Followed' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}