import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react'

const ProfileSkeleton = () => {
  return (
    <Flex flexDir='column'>
      <SkeletonCircle size='40' mx='auto' />
      <Flex flexDir='column' gap={4} mt={5}>
        <Skeleton width='210px' height={'45px'} />
        <Skeleton width='210px' height={'15px'} />
        <Skeleton width='210px' height={'15px'} />
        <Skeleton width='210px' height={'15px'} />
      </Flex>
    </Flex>
  )
}

export default ProfileSkeleton
