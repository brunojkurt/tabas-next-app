import { DefaultLayout } from 'components/UI/layouts'
import {
  Container,
  List,
  ListItem,
  ListItemText
} from 'components/UI/elements'
import Link from 'next/link'
import { PageTitle, PropertyLink } from 'styles/pages/home'
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
            <Link
              key={property.id}
              href={`/apartments/${property.city}/${property.neighborhood}/${property.id}`}
              passHref
            >
              <ListItem component={PropertyLink} button>
                <ListItemText>
                  {`${t('pages.home.apartment')} - ${property.id}`}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Container>
    </DefaultLayout>
  )
}

export default Home
