import { Logo } from '@/assets/images'
import { Box, Flex, Image, Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box className='tr--container' py={5}>
      <Flex alignItems='center' justifyContent='space-between'>
        <Image src={Logo} w={35} />
        <Flex gap={5}>
          <Link href='/'>Profile</Link>
          <Link href='/repositories'>Repositories</Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
