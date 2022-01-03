import styled from 'styled-components'

import {
  PrimaryButton,
  SecondaryButton,
} from '../../utils/styles/global.styled'

export const PizzaBlock = styled.article`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const PizzaInfo = styled.section`
  font-weight: 600;
  font-size: 20px;
`

export const PizzaButton = styled(PrimaryButton)`
  align-self: flex-end;
`

export const PizzaSecondaryButton = styled(SecondaryButton)`
  align-self: flex-end;
  position: relative;
`

export const OptionsBlock = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const Result = styled.section`
  align-self: flex-end;
  font-weight: 600;
  font-size: 22px;
`
