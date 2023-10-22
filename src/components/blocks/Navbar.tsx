import { Logo } from '@/assets/images'
import { Box, Flex, Image, Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box className='tr--container' py={5}>
      <Flex alignItems='center' justifyContent='space-between'>
        <Link href='/'>
          <Image src={Logo} w={35} />
        </Link>
        <Flex gap={5}>
          <Link href='/does-not-exist'>404</Link>
          <Link href='/error'>Error Boundary</Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
