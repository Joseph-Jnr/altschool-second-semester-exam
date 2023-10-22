import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ErrorBoundary = () => {
  const error: any = useRouteError()

  return (
    <div className='not_found'>
      <h1 className='text-8xl'>Oops!</h1>
      <p className='tracking-widest	text-lg'>- Something went wrong -</p>
      <pre>{error}</pre>
      <Link to='/' className='my-4'>
        <button className='py-2  border px-10'>
          Click to <strong>REFRESH</strong>
        </button>
      </Link>
    </div>
  )
}

export default ErrorBoundary
