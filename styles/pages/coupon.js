import styled, { css } from 'styled-components'
import { TextField, Button } from 'components/UI/elements' 

export const CouponWrapper = styled.div`
  margin: 50px 0;
  padding: 15px 0;
  display: flex;
`
export const CouponCodeField = styled(TextField)`
  margin-right: 8px;
  pointer-events: ${({ valid }) => valid ? 'none' : 'all'};

  fieldset {
    border: ${({ valid }) => valid ? '5px solid' : '3px solid'};
    border-color: ${({ valid }) => valid ? 'green' : '#000'};
    border-radius: 0px;
  }

  input:focus + fieldset {
    ${({ applied, error, theme }) => !applied && css`
      box-shadow: inset 0px 0px 0px 2px ${error ? theme.palette.error.main : theme.palette.primary.main};
    `}
  }
`
export const ApplyBtn = styled(Button)`
  margin-right: 8px;
`