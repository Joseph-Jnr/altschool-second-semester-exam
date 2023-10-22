import { AppLayout } from '@/layout'
import { PageHelmet, ProfileCard } from '@/components'

const Home = () => {
  return (
    <>
      <PageHelmet title='Profile' />
      <AppLayout>
        <ProfileCard />
      </AppLayout>
    </>
  )
}

export default Home
