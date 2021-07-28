import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'

export const StyledTypography = styled(Typography)`
  ${({ thickness }) => thickness && css`
    font-weight: ${thickness};
  `}
`
