// libs
import React from 'react'
import { useSelector } from 'react-redux'
// icon
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

// constants
import { MENU, SHOPPING_CART, BRAND_NAME } from '../../utils/constants'

// styles
import { PrimaryLink, SecondaryLink } from '../../utils/styles/global.styled'
import { StyledNavbar, Section, PizzaIcon, NavTitle } from './Navbar.styled'

const Navbar: React.FunctionComponent = () => {
  const orders = useSelector(
    ({ rawOrders }: { rawOrders: RawOrders }) => rawOrders.pizzas
  )
  console.log({ orders })
  return (
    <StyledNavbar as="nav" responsive gap="20px">
      <Section>
        <PizzaIcon icon={faPizzaSlice} />
        <NavTitle fontSize="20px" fontWeight="800">
          {BRAND_NAME}
        </NavTitle>
      </Section>
      <Section direction="flex-end">
        <PrimaryLink to="/menu">{MENU}</PrimaryLink>
        <SecondaryLink
          to="/shop"
          className={`${Object.keys(orders).length && 'attention'}`}
        >
          {SHOPPING_CART}
        </SecondaryLink>
      </Section>
    </StyledNavbar>
  )
}

export default Navbar
