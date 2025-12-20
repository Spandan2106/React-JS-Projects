import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/index.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function PostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()
  const { user } = useAuth()

  const isValid = title.length > 5 && body.length > 10

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid) {
      dispatch(addPost({ id: Date.now(), title, body, userId: user.username }))
      setTitle('')
      setBody('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mb-2 w-full text-black"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="What's on your mind?"
        className="border p-2 w-full text-black"
      />
      <button type="submit" disabled={!isValid} className="bg-blue-500 text-white p-2 disabled:opacity-50">
        Post
      </button>
    </form>
  )
}