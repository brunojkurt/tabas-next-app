import { DefaultLayout } from 'components/UI/layouts'
import {
  Container,
  List,
  ListItem,
  ListItemText
} from 'components/UI/elements'
import Link from 'next/link'
import { PageTitle } from 'styles/pages/home'
import { useI18n } from 'hooks/i18n'

const Home = () => {
  const { t } = useI18n()

  const properties = [
    {
      city: 'sao-paulo',
      neighborhood: 'jardim-paulista',
      id: 'J032'
    },
    {
      city: 'sao-paulo',
      neighborhood: 'itaim-bibi',
      id: 'I015'
    },
    {
      city: 'sao-paulo',
      neighborhood: 'moema',
      id: 'M001'
    }
  ]

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
          {properties.map(property => (
            <ListItem key={property.id} button>
              <ListItemText>
                <Link
                  href={`/apartments/${property.city}/${property.neighborhood}/${property.id}`}
                >
                  {`${t('pages.home.apartment')} - ${property.id}`}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </DefaultLayout>
  )
}

export default Home
