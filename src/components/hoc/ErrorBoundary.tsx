import { Link } from 'react-router-dom'

const ErrorBoundary = () => {
  return (
    <div className='not--found'>
      <h1 className='text-8xl'>Oops!</h1>
      <p className='tracking-widest	text-lg mt-5'>- Something went wrong -</p>
      <Link to='/' className='my-4'>
        <button className='py-2  border px-10'>
          Click to <strong>REFRESH</strong>
        </button>
      </Link>
    </div>
  )
}

export default ErrorBoundary
