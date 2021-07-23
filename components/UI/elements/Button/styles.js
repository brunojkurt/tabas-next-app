import styled, { css } from 'styled-components'
import { Button, CircularProgress } from '@material-ui/core'

export const StyledButton = styled(Button)`
  position: relative;
  justify-content: center;
  align-items: center;
  ${({ rounded }) => !rounded && css`
    border-radius: 0;
  `}
`

export const Loading = styled(CircularProgress)`
  position: absolute;
  justify-self: center;
  align-self: center;
`
