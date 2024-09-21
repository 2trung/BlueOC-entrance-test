import { useEffect } from 'react'
import { fetchPosts, postsSelector } from '../redux/reducers/postsSlice'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsSelector)
  useEffect(() => {
    dispatch(fetchPosts() as any)
  }, [])

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        {posts?.map((post) => (
          <div
            key={post.id}
            className='w-96 hover:border-indigo-950 border border-transparent rounded-lg p-4'
          >
            <h2 className='hover:underline font-medium text-lg cursor-pointer first-letter:uppercase line-clamp-1 text-center'>
              {post.title}
            </h2>
            <p className='cursor-text sm:p-4 p-1'>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
