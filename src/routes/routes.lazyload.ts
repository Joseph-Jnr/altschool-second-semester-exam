import loadable from '@loadable/component'

// Website routes
export const Home = loadable(() => import('@/pages/website/Home'))
export const Repositories = loadable(
  () => import('@/pages/website/Repositories')
)
export const RepositoryDetails = loadable(
  () => import('@/pages/website/RepositoryDetails')
)
