import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'

// components
import Navbar from '../components/navbar/Navbar'
import PizzaMenu from '../containers/PizzaMenu'
import ShoppingCart from './shoppingCart/ShoppingCart'

import withDataFromAPI from '../utils/hoc/withDataFromAPI'
import { addRawOrders } from '../store'

// styles
import { Container, Content, GlobalStyle } from '../utils/styles/global.styled'

const App: React.FunctionComponent = () => {
  const [cookies, setCookie] = useCookies(['rawOrders'])
  const dispatch = useDispatch()

  useEffect(() => {
    if (cookies.rawOrders) {
      dispatch(addRawOrders({ ...cookies.rawOrders }))
    }
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Content>
          <Switch>
            <Route path="/menu">
              <PizzaMenu />
            </Route>
            <Route path="/shop">
              <ShoppingCart />
            </Route>
            <Redirect to="/menu" />
          </Switch>
        </Content>
      </Container>
    </BrowserRouter>
  )
}

export default withDataFromAPI(App)
// export default App
