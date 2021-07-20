import { Typography } from 'components/UI'

const Page = ({ page }) => {
  return (
    <Typography>
      { page }
    </Typography>
  )
}

export const getStaticProps = async (context) => {
  const { page } = context.params
  return {
    props: { page }
  }
}

export const getStaticPaths = () => {
  return {
    paths: [{
      params: {
        page: 'home'
      }
    }, {
      params: {
        page: 'admin'
      }
    }],
    fallback: false
  }
}

export default Page
