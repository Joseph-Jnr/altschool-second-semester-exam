import { GetUserProfile } from '@/services'
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  IconBrandTwitter,
  IconUsersGroup,
  IconMapPin,
  IconMail,
} from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { ProfileSkeleton } from '../skeletons'

const ProfileCard = () => {
  //Fetching user count
  const { data: profileDetails, isFetching } = useQuery({
    queryKey: ['user'],
    queryFn: GetUserProfile,
  })

  return (
    <Box className='tr--container'>
      <Flex justifyContent='center'>
        <Box p={10} border='1px solid #334155' rounded='xl' w='fit-content'>
          {isFetching ? (
            <ProfileSkeleton />
          ) : (
            <>
              <Flex>
                <Image
                  src={profileDetails?.avatar_url}
                  w={150}
                  rounded='full'
                  mx='auto'
                />
              </Flex>

              <Flex gap={3} alignItems='center' mt={6} mb={3}>
                <Text color='gh.4' fontSize={{ s: '23px', md: '25px' }}>
                  {profileDetails?.name}
                </Text>
                <Badge variant='subtle' colorScheme='green'>
                  {profileDetails?.login}
                </Badge>
              </Flex>

              <Flex gap={3} alignItems='center'>
                <IconUsersGroup size={20} />
                <Box>
                  <Text fontSize={14}>
                    <b>{profileDetails?.followers}</b> Followers <b>.</b>{' '}
                    <b>{profileDetails?.following}</b> Following
                  </Text>
                </Box>
              </Flex>

              <Flex flexDir='column' gap={3} my={5}>
                <Flex gap={3}>
                  <IconMapPin size={20} />
                  <Text fontSize={14}>{profileDetails?.location}</Text>
                </Flex>
                <Flex gap={3}>
                  <IconMail size={20} />
                  <Text fontSize={14}>{profileDetails?.email}</Text>
                </Flex>
                <Flex gap={3}>
                  <IconBrandTwitter size={20} />
                  <Text fontSize={14}>{profileDetails?.twitter_username}</Text>
                </Flex>
              </Flex>

              <VStack>
                <Link href='/repositories' w='full'>
                  <Button colorScheme='green' w='full'>
                    See {profileDetails?.public_repos} Repositories
                  </Button>
                </Link>
                <Link href={profileDetails?.blog} w='full'>
                  <Button colorScheme='default' w='full' variant='outline'>
                    Checkout my portfolio
                  </Button>
                </Link>
              </VStack>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default ProfileCard
