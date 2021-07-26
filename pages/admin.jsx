import { Container, Typography } from 'components/UI/elements'
import withAuth from 'components/withAuth'

const Admin = () => {
  return (
    <Container>
      <Typography variant="h5">
        You are logged in
      </Typography>
    </Container>
  )
}

export default withAuth(Admin)
