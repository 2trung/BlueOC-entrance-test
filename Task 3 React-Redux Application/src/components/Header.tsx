import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between sm:px-4 px-0 py-2 border-b-2 gap-2'>
      <Link
        to={'/'}
        className='font-medium sm:text-2xl text-base cursor-pointer'
      >
        Home
      </Link>
      <div className='flex gap-2 justify-center cursor-pointer bg-blue-600 sm:py-2 py-1 sm:px-6 px-3 rounded-3xl hover:bg-blue-500'>
        {/* <IoAddCircleOutline className='size-6 text-white' /> */}
        <Link to={'/add-post'} className='font-medium text-white text-center'>
          Add post
        </Link>
      </div>
    </div>
  )
}

export default Header
