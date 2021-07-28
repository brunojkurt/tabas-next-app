import styled, { css } from 'styled-components'
import { Typography, Divider } from 'components/UI/elements'

export const BannerImage = styled.div`
  width: 100%;
  height: 650px;
  background: '#CCC';
  ${({ backgroundSrc }) => backgroundSrc && css`
    background-image: url(${backgroundSrc});
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: center;
    background-size: cover;
  `};
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.values['sm']}px) {
      height: 350px;
    }
  `}
`
export const ApartmentTitle = styled(Typography)`
  margin-top: 30px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.values['sm']}px) {
      font-size: 1.7rem;
    }
  `}
`
export const ApartmentInfoWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.values['sm']}px) {
      flex-direction: column;
    }
  `}
`
export const InfoText = styled(Typography)`
  font-size: 17px;
  margin-right: 15px;
  color: ${({ theme }) => theme.palette.text.primary};
`
export const ContentDivider = styled(Divider)`
  margin: 20px 0;
`
export const PropertyDescriptionTitle = styled(Typography)`
  text-transform: uppercase;
  color: #000;
`
export const PropertyDescription = styled(Typography)`
  padding: 20px 0 120px 0;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.values['sm']}px) {
      font-size: 1rem;
    }
  `}
`