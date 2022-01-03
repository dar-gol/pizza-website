import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Title } from '../../utils/styles/global.styled'

export const MenuTitle = styled(Title)`
  position: relative;
  display: block;
  margin: 0 20px 10px 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--grey);
`

export const PizzasBlock = styled.article`
  display: flex;
  flex-direction: column;
`

export const PizzaLink = styled(Link)`
  &:hover {
    opacity: 1;
  }
  color: white;
  padding: 10px;
  text-decoration: none;
  opacity: 0.8;
  transition: 0.2s;
`

export const ReturnLink = styled(Link)`
  &:hover {
    transform: scale(1.1);
  }
  position: absolute;
  left: 0;
  color: white;
  text-decoration: none;
  transition: 0.2s;
`

export const ReturnIcon = styled(FontAwesomeIcon)`
  color: var(--yellow);
  font-size: 18px;
`
