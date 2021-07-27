import { Container, Typography, Image } from 'components/UI/elements'
import { api } from 'services/api'

const Property = ({ property }) => {
  return (
    <Container maxWidth="lg">
      {property && (
        <>
          <Image src={property.photos[0]} width="600" height="300" alt={property.title} />
          <Typography variant="h4">
            {property.title}
          </Typography>
          <Typography variant="h6">
            {property.description}
          </Typography>
        </>
      )}
    </Container>
  )
}

export const getStaticPaths = async () => {
  const properties = [
    {
      city: 'sao-paulo',
      neighborhood: 'jardim-paulista',
      id: 'J035'
    },
    {
      city: 'sao-paulo',
      neighborhood: 'itaim-bibi',
      id: 'I040'
    }
  ]

  return {
    paths: properties.map(p => ({ params: p })),
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const property = await api(`/api/v1/apartments/${id}`)
  
  return {
    props: {
      property
    }
  }
}

export default Property
