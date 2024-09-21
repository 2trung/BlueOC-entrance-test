import axios from '../utils/axiosInterceptors'

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export const fetchPostsAPI = async (): Promise<Post[]> => {
  const response = await axios.get('/posts')
  return response.data
}

export const addPostAPI = async (post: Omit<Post, 'id'>): Promise<Post> => {
  const response = await axios.post('/posts', post)
  return response.data
}
