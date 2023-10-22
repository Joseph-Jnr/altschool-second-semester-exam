import { PageHelmet } from '@/components'

import { Link } from 'react-router-dom'

const NotFound = () => (
  <>
    <PageHelmet title='404 Page Not Found' />
    <div className='not--found'>
      <h1 className='text-8xl'>404</h1>
      <p className='tracking-widest	text-lg'>- Page Not Found -</p>
      <Link to='/' className='my-4'>
        <button className='py-2 hover:bg-white hover:text-slate-800 px-10 bg-slate-800 border-white border text-white'>
          Go back <strong>HOME</strong>
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
