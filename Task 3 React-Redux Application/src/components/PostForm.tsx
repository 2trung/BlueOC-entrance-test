import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { addPost, loadingSelector } from '../redux/reducers/postsSlice'

type Post = {
  title: string
  body: string
}
const PostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector(loadingSelector)

  const { register, handleSubmit } = useForm<Post>()

  const onSubmit: SubmitHandler<Post> = async (data) => {
    const res = await dispatch(addPost({ ...data, userId: 1 }) as any)
    if (res.error) {
      toast.error('Failed to add post!')
    } else {
      toast.success('Post added successfully!')
      navigate('/')
    }
  }
  return (
    <div className='w-[60vw]'>
      <h2 className='uppercase text-center font-bold text-2xl'>Add new post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
        <label className='p-1' htmlFor='title'>
          Title
        </label>
        <input
          className='border border-gray-400 rounded-md py-1 px-2'
          {...register('title', { required: true })}
        />

        <div className='py-4' />

        <label className='p-1' htmlFor='body'>
          Body
        </label>
        <textarea
          className='border border-gray-400 rounded-md py-1 px-2'
          rows={7}
          {...register('body', { required: true })}
        />

        <div className='py-4' />

        <button
          className='bg-blue-600 hover:bg-blue-500 py-2 hover:cursor-pointer text-white rounded-lg  flex justify-center'
          type='submit'
          disabled={loading}
        >
          {loading ? (
            <svg
              className='animate-spin size-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
            >
              <path
                fill='currentColor'
                d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
              ></path>
            </svg>
          ) : (
            'Add post'
          )}
        </button>
      </form>
    </div>
  )
}

export default PostForm
