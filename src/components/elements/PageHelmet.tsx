import { Helmet } from 'react-helmet'

type Props = {
  title: string
  description?: string
}

const PageHelmet = ({ title, description = '' }: Props) => (
  <Helmet title={`Github | ${title}`}>
    <meta name='description' content={description} />
  </Helmet>
)

export default PageHelmet
