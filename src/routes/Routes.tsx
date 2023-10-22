import { createBrowserRouter } from 'react-router-dom'
import { Repositories, Home, RepositoryDetails } from './routes.lazyload'
import { ErrorBoundary } from '@/components'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    children: [{ element: <Home />, index: true }],
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/repos',
    children: [{ element: <Repositories />, index: true }],
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  {
    // Add a dynamic route for repository details
    path: '/repos/:repoName',
    element: <RepositoryDetails />,
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  { path: '*', element: <NotFound /> },
])

export default router
