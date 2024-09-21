import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPostsAPI, addPostAPI } from '../../apis/post'
import { Post } from '../../apis/post'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await fetchPostsAPI()
      return response
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data)
      } else {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)
export const addPost = createAsyncThunk(
  'posts/addPost',
  async (post: Omit<Post, 'id'>, thunkAPI) => {
    try {
      console.log(post)
      const response = await addPostAPI(post)
      return response
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data)
      } else {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  }
)
type PostState = {
  posts: Post[]
  loading: boolean
  error: string | null
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    // Get posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
      state.error = null
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to fetch posts'
    })

    // Add post
    builder.addCase(addPost.pending, (state) => {
      state.loading = true
    })
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false
      state.posts.push(action.payload)
      state.error = null
    })

    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to add post'
    })
  },
})

export const postReducer = postSlice.reducer
export const postsSelector = (state: { postReducer: PostState }) =>
  state.postReducer.posts
export const loadingSelector = (state: { postReducer: PostState }) =>
  state.postReducer.loading
export const errorSelector = (state: { postReducer: PostState }) =>
  state.postReducer.error
