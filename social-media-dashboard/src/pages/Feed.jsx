import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post.jsx'
import PostForm from '../components/PostForm.jsx'
import { setUsers } from '../store/index.js'
import { usePosts } from '../hooks/usePosts.js'

export default function Feed() {
  const posts = usePosts()
  const dispatch = useDispatch()
  const searchQuery = useSelector((state) => state.app.searchQuery)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then((res) => res.json())
      .then((data) => dispatch(setUsers(data)))

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('Load more posts...')
      }
    }
    window.addEventListener('scroll', handleScroll)

    const interval = setInterval(() => {
      console.log('Checking for new posts...')
    }, 5000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [dispatch])

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <PostForm />
      <div>
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">No posts found matching your search.</p>
        )}
      </div>
    </div>
  )
}