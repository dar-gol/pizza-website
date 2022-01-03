// libs
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// icon
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// views
import PizzaPanel from '../pizzaPanel/PizzaPanel'

// constants
import { MENU_HEADER } from '../../utils/constants'

// styles
import { PizzasBlock, ReturnLink, ReturnIcon, MenuTitle } from './Menu.styled'

const Menu: React.FC<Props> = ({ listPizza, url }: Props) => (
  <>
    <MenuTitle textAlign="center">
      <Switch>
        <Route path={`${url}/:id`}>
          <ReturnLink to={url}>
            <ReturnIcon icon={faChevronLeft} />
          </ReturnLink>
        </Route>
      </Switch>
      {MENU_HEADER}
    </MenuTitle>
    <Switch>
      <Route exact path={`${url}`}>
        <PizzasBlock>{listPizza}</PizzasBlock>
      </Route>
      <Route exact path={`${url}/:id`}>
        <PizzaPanel />
      </Route>
    </Switch>
  </>
)

export default Menu
