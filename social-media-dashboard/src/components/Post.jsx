import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { likePost, addComment, deletePost } from '../store/index.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function Post({ post }) {
  const dispatch = useDispatch()
  const [commentText, setCommentText] = useState('')
  const { user: loggedInUser } = useAuth();
  const canDelete = loggedInUser?.username === post.userId;

  const handleLike = () => {
    dispatch(likePost(post.id))
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (commentText) {
      dispatch(addComment(post.id, commentText))
      setCommentText('')
    }
  }

  const handleDelete = () => {
    dispatch(deletePost(post.id))
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 mb-4 rounded">
      <div className="flex justify-between items-start">
        <h3 className="font-bold">{post.title}</h3>
        {canDelete && (
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 text-sm font-semibold"
          >
            Delete
          </button>
        )}
      </div>
      <p>{post.body}</p>
      <button onClick={handleLike} className="bg-green-500 text-white p-1 mr-2">
        Like ({post.likes || 0})
      </button>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add comment"
          className="border p-1 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white p-1">Comment</button>
      </form>
      <ul>
        {post.comments?.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  )
}