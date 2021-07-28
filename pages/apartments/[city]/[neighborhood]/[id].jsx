import { Container } from 'components/UI/elements'
import { DefaultLayout } from 'components/UI/layouts'
import { getAPIClient } from 'services/api'
import { useI18n } from 'hooks/i18n'

import {
  BannerImage,
  ApartmentTitle,
  ApartmentInfoWrapper,
  InfoText,
  ContentDivider,
  PropertyDescriptionTitle,
  PropertyDescription
} from 'styles/pages/apartments/show'

const ImageBucketBaseUrl = process.env.NEXT_PUBLIC_WEBSITE_EN_URL

const Property = ({ property }) => {
  const { t } = useI18n()

  return (
    <DefaultLayout>
      {property && (
        <>
          <BannerImage backgroundSrc={`${ImageBucketBaseUrl}${property.photos[0]}`} />
          <Container maxWidth="lg">
            <ApartmentTitle variant="h4" thickness="900">
              {property.title}
            </ApartmentTitle>
            <ApartmentInfoWrapper>
              <InfoText
                variant="overline"
                thickness="300"
              >
                {`${property.bed_room} 
                  ${property.bed_room > 1
                    ? t('pages.apartments.show.bedroom_pluralized')
                    : t('pages.apartments.show.bedroom')}`}
              </InfoText>
              <InfoText
                variant="overline"
                thickness="300"
              >
                {`${property.bath_room} 
                  ${property.bath_room > 1
                    ? t('pages.apartments.show.bathroom_pluralized')
                    : t('pages.apartments.show.bathroom')}`}
              </InfoText>
              <InfoText
                variant="overline"
                thickness="300"
              >
                {`${property.sqm_total} M²`}
              </InfoText>
              <InfoText
                variant="overline"
                thickness="300"
              >
                {property.tabas_id}
              </InfoText>
            </ApartmentInfoWrapper>
            <ContentDivider />
            <PropertyDescriptionTitle variant="h6" thickness="600">
              {t('pages.apartments.show.description_title')}
            </PropertyDescriptionTitle>
            <PropertyDescription variant="h6" thickness="200">
              {property.description}
            </PropertyDescription>
          </Container>
        </>
      )}
    </DefaultLayout>
  )
}

export const getStaticPaths = async () => {
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
    }
  ]

  return {
    paths: properties.map(property => ({ params: property })),
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const api = getAPIClient(context)

  const res = await api(`/apartments/${id}`)
  const { data: property } = res

  return {
    props: {
      property
    },
    revalidate: 60 * 5 // 5 min
  }
}

export default Property
