import { Navbar } from '@/components'
import { Box } from '@chakra-ui/react'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box
      maxWidth='1850px'
      minHeight='100vh'
      bg='gh.black'
      color='gh.lightGray'
      mx='auto'
    >
      <Navbar />
      <Box py='10'>{children}</Box>
    </Box>
  )
}

export default AppLayout
