import { Skeleton } from '@chakra-ui/react'

const RepoSkeleton = () => {
  return (
    <>
      <Skeleton width='full' rounded='lg' height={'125px'} />
      <Skeleton width='full' rounded='lg' height={'125px'} />
      <Skeleton width='full' rounded='lg' height={'125px'} />
    </>
  )
}

export default RepoSkeleton
