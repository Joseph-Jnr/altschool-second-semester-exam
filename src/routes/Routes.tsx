import { createBrowserRouter } from 'react-router-dom'
import { Repositories, Home, RepositoryDetails } from './routes.lazyload'
import { ErrorBoundary, TriggerError } from '@/components'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    children: [{ element: <Home />, index: true }],
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/repositories',
    children: [{ element: <Repositories />, index: true }],
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  {
    // Add a dynamic route for repository details
    path: '/repositories/:repoName',
    element: <RepositoryDetails />,
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  {
    // Add a dynamic route for repository details
    path: '/error',
    element: <TriggerError />,
    hasErrorBoundary: true,
    errorElement: <ErrorBoundary />,
  },
  { path: '*', element: <NotFound /> },
])

export default router
