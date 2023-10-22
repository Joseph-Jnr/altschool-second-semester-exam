import { Flex, Skeleton } from '@chakra-ui/react'

const RepoDetailSkeleton = () => {
  return (
    <>
      <Flex my={5} justifyContent='space-between' alignItems='center'>
        <Skeleton width='100px' rounded='lg' height={'45px'} />
        <Skeleton width='100px' rounded='lg' height={'45px'} />
      </Flex>

      <Flex flexDir='column' gap={3} mt={10}>
        <Skeleton width='300px' rounded='md' height={'25px'} />
        <Skeleton width='300px' rounded='md' height={'25px'} />
        <Skeleton width='300px' rounded='md' height={'25px'} />
        <Skeleton width='300px' rounded='md' height={'25px'} />
      </Flex>
    </>
  )
}

export default RepoDetailSkeleton
