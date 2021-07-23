import { DefaultLayout } from 'components/UI/layouts'
import {
  Container,
  List,
  ListItem,
  ListItemText
} from 'components/UI/elements'
import { PageTitle } from 'styles/pages/home'
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

export async function getStaticProps(context) {
  return {
    props: {

    }
  }
}

export default Home
