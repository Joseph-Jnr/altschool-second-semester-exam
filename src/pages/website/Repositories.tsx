import { PageHelmet, SectionHeading } from '@/components'
import { AppLayout } from '@/layout'
import { GetRepos } from '@/services'
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { IconEye, IconGitFork } from '@tabler/icons-react'
import { RepoSkeleton } from '@/components/skeletons'

const Repositories = () => {
  //Fetching repositories
  const { data: repoList, isFetching } = useQuery({
    queryKey: ['repos'],
    queryFn: GetRepos,
  })

  return (
    <>
      <PageHelmet title='Repositories' />
      <AppLayout>
        <Box className='tr--container'>
          <SectionHeading title='Repositories' />

          <Box py={10}>
            <Flex flexDir='column' gap={5}>
              {isFetching ? (
                <RepoSkeleton />
              ) : (
                <>
                  {repoList?.length > 0 ? (
                    <>
                      {repoList.map((repo: any) => {
                        return (
                          <Box
                            key={repo?.id}
                            p={5}
                            border='1px solid #334155'
                            bg='#33415522'
                            rounded='lg'
                          >
                            <Flex justifyContent='space-between' gap={2}>
                              <Box>
                                <Text
                                  fontSize={18}
                                  fontWeight='bold'
                                  color='gh.4'
                                >
                                  {repo?.name}
                                </Text>
                                <Text fontSize={14}>{repo?.description}</Text>
                              </Box>
                              <Link href={`/repositories/${repo?.name}`}>
                                <IconEye />
                              </Link>
                            </Flex>

                            <Box mt={3}>
                              <Flex>
                                {repo?.forks > 0 && (
                                  <Flex alignItems='center' gap={1}>
                                    <IconGitFork size={18} /> {repo?.forks}
                                  </Flex>
                                )}
                              </Flex>

                              <Text fontSize={14} mt={5}>
                                {repo?.language}
                              </Text>
                            </Box>
                          </Box>
                        )
                      })}
                    </>
                  ) : (
                    <Box p={40}>
                      <Heading size='md' textAlign='center'>
                        No repositories found.
                      </Heading>
                    </Box>
                  )}
                </>
              )}
            </Flex>
          </Box>
        </Box>
      </AppLayout>
    </>
  )
}

export default Repositories
