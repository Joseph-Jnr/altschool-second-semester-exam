import { Navbar } from '@/components'
import { Box, Flex } from '@chakra-ui/react'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Flex maxWidth='1850px' bg='gh.black' mx='auto'>
      <Box>
        <Navbar />
        <Box mt='10'>{children}</Box>
      </Box>
    </Flex>
  )
}

export default AppLayout
