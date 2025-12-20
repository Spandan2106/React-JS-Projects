import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../store/index.js'

export const usePosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => dispatch(setPosts(data.map((p) => ({ ...p, likes: 0, comments: [] })))))
  }, [dispatch])

  return posts
}