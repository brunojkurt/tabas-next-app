import styled from 'styled-components'
import { DefaultLayout } from 'components/UI/layouts'
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText
} from 'components/UI/elements'
import { useI18n } from 'hooks/i18n'

const Home = () => {
  const { t } = useI18n()

  return (
    <DefaultLayout>
      <Container>
        <PageTitle
          variant="h5"
          align="center"
        > 
          { t('pages.home.apartments_title') }
        </PageTitle>
      </Container>
      <Container maxWidth="sm">
        <List component="nav">
          <ListItem button>
            <ListItemText primary={ t('pages.home.apartment') } />
          </ListItem>
        </List>
      </Container>
    </DefaultLayout>
  )
}

const PageTitle = styled(Typography)`
  margin-top: 50px;
`

export default Home
