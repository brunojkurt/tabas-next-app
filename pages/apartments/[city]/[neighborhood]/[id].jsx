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
    <>
      {property && (
        <DefaultLayout>
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
        </DefaultLayout>
      )}
    </>
  )
}

export const getStaticPaths = async (context) => {
  const { locales } = context
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

  const paths = locales.map(locale => properties.map(property => ({ params: property, locale }))).flat()

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const api = getAPIClient(context)
  const delay = (amount = 3500) => new Promise(resolve => setTimeout(resolve, amount))
  try {
    await delay()
    const { data: property } = await api(`/apartments/${id}`)

    if (!property) {
      return { notFound: true }
    }

    return {
      props: { property },
      revalidate: 1000
    }
  } catch {
    return { notFound: true }
  }
}

export default Property
