import { PageHelmet } from '@/components'

import { Link } from 'react-router-dom'

const NotFound = () => (
  <>
    <PageHelmet title='404 Page Not Found' />
    <div className='not--found'>
      <h1 className='text-8xl'>404</h1>
      <p className='tracking-widest	text-lg'>- Page Not Found -</p>
      <Link to='/' className='my-4'>
        <button className='py-2 bg-white text-slate-800 px-10 hover:bg-black hover:border-white border hover:text-white'>
          Go back <strong>HOME</strong>
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
