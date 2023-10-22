import { PageHelmet } from '@/components'
import { AppLayout } from '@/layout'
import { Box } from '@chakra-ui/react'

const RepositoryDetails = () => {
  return (
    <>
      <PageHelmet title='Repo Detail' />
      <AppLayout>
        <Box>Repository details</Box>
      </AppLayout>
    </>
  )
}

export default RepositoryDetails
