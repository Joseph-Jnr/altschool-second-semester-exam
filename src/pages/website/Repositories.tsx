import { PageHelmet } from '@/components'
import { AppLayout } from '@/layout'
import { Box } from '@chakra-ui/react'

const Repositories = () => {
  return (
    <>
      <PageHelmet title='Repositories' />
      <AppLayout>
        <Box>List of Repositories</Box>
      </AppLayout>
    </>
  )
}

export default Repositories
