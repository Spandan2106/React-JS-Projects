import { configureStore, createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload
    },
    addPost: (state, action) => {
      state.unshift(action.payload)
    },
    likePost: (state, action) => {
      const post = state.find((post) => post.id === action.payload)
      if (post) {
        post.likes = (post.likes || 0) + 1
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload
      const post = state.find((post) => post.id === postId)
      if (post) {
        if (!post.comments) {
          post.comments = []
        }
        post.comments.push(comment)
      }
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload)
    },
  },
})

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload
    },
    followUser: (state, action) => {
      const user = state.find((user) => user.id === action.payload)
      if (user) {
        user.followed = true
      }
    },
  },
})

export const { setSearchQuery } = appSlice.actions
export const { setPosts, addPost, likePost, addComment, deletePost } = postsSlice.actions
export const { setUsers, followUser } = usersSlice.actions

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  },
})

export default store