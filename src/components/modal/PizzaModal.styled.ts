import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PizzaImg } from '../../utils/styles/global.styled'

export const SuccessIcon = styled(FontAwesomeIcon)`
  margin: 10px 0;
  color: var(--yellow);
  font-size: 100px;
`

export const ModalWrapper = styled.div``

export const ModelContent = styled.section`
  display: flex;
  flex-direction: column;
`

export const IngredientsList = styled.div``

export const DefaultIngredients = styled.span`
  font-size: 13px;
`

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`

export const ContentWrapper = styled.section`
  display: flex;
  margin-top: 10px;
`
export const ModalImg = styled(PizzaImg)`
  @media (max-width: 500px) {
    display: none;
  }
`
