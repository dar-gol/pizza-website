import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Col, Title } from '../../utils/styles/global.styled'

export interface Props {
  direction?: string
}

export const Section = styled.section`
  display: flex;
  justify-content: ${(props: Props) => props.direction};
  width: 50%;
  @media (max-width: 680px) {
    width: auto;
    & + div {
      margin-top: 20px;
    }
  }
`

export const PizzaIcon = styled(FontAwesomeIcon)`
  color: var(--yellow);
  font-size: 32px;
`

export const StyledNavbar = styled(Col)`
  background-color: #222;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`

export const NavTitle = styled(Title)`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 20px;
`
