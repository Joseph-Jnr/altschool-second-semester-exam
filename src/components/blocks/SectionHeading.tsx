import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react'
import { IconArrowLeft } from '@tabler/icons-react'

interface SectionHeadingProps {
  title: string | undefined
  canReturn?: boolean
}

const SectionHeading = ({ title, canReturn }: SectionHeadingProps) => {
  return (
    <Box py={{ s: 3, md: 5 }} borderBottom='1px solid #334155'>
      <Flex
        flexDir={{ s: 'column-reverse', md: 'row' }}
        gap={5}
        justifyContent='space-between'
        alignItems={{ s: 'start', md: 'center' }}
      >
        <Heading size='lg'>{title}</Heading>
        {canReturn && (
          <Link href='/repositories'>
            <Button size='sm' leftIcon={<IconArrowLeft />}>
              Go back
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  )
}

export default SectionHeading
