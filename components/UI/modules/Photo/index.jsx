import { Image } from 'components/UI/elements'

const Photo = ({ src, ...rest }) => {
  return <Image
    src={`${process.env.NEXT_PUBLIC_WEBSITE_EN_URL}${src}`}
    {...rest}
  />
}

export default Photo
