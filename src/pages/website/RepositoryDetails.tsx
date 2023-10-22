import { PageHelmet, SectionHeading } from '@/components'
import { AppLayout } from '@/layout'
import { GetRepoContents, GetSingleRepo } from '@/services'
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {
  IconFolderFilled,
  IconFile,
  IconChevronDown,
  IconCode,
} from '@tabler/icons-react'
import { RepoDetailSkeleton } from '@/components/skeletons'

const RepositoryDetails = () => {
  const { repoName } = useParams()

  //Fetching single repository data
  const { data: repoDetails } = useQuery(['repoName'], () =>
    GetSingleRepo(repoName)
  )

  //Fetching single repository contents
  const { data: repoContent, isFetching } = useQuery(['repoContent'], () =>
    GetRepoContents(repoName)
  )

  return (
    <>
      <PageHelmet title='Repo Detail' />
      <AppLayout>
        <Box className='tr--container'>
          <SectionHeading title={repoName} canReturn />
          {isFetching ? (
            <RepoDetailSkeleton />
          ) : (
            <>
              <Flex
                justifyContent='space-between'
                alignItems='center'
                my={5}
                mb={10}
              >
                <Menu>
                  <MenuButton
                    as={Button}
                    bg='#171d26'
                    _hover={{ bg: '#12171e' }}
                    border='1px solid #334155'
                    color='gh.6'
                    size='sm'
                    rightIcon={<IconChevronDown size={20} />}
                  >
                    {repoDetails?.default_branch}
                  </MenuButton>
                  <MenuList></MenuList>
                </Menu>

                <Menu>
                  <MenuButton
                    as={Button}
                    zIndex={10}
                    colorScheme='green'
                    size='sm'
                    leftIcon={<IconCode size={20} />}
                  >
                    Clone
                  </MenuButton>
                  <MenuList bg='#171d26' border='1px solid #334155'>
                    <MenuItem bg='transparent' fontSize={{ s: 12, md: 14 }}>
                      {repoDetails?.clone_url}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>

              {repoContent?.length > 0 ? (
                <>
                  {repoContent
                    .sort((a: any, b: any) => {
                      // Sort directories first, then files
                      if (a.type === 'dir' && b.type !== 'dir') return -1
                      if (a.type !== 'dir' && b.type === 'dir') return 1
                      return 0
                    })
                    .map((content: any) => (
                      <Box key={content.name}>
                        <Flex alignItems='center' gap={3} mb={2}>
                          {content.type === 'dir' ? (
                            <IconFolderFilled />
                          ) : (
                            <IconFile fillOpacity='red' size={20} />
                          )}
                          <Box>{content.name}</Box>
                        </Flex>
                      </Box>
                    ))}
                </>
              ) : (
                <Box>No content</Box>
              )}
            </>
          )}
        </Box>
      </AppLayout>
    </>
  )
}

export default RepositoryDetails
