import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'

import PizzaModal from '../../components/modal/PizzaModal'
import Order from '../../components/order/Order'
import Sauces from '../../components/sauces/Sauces'

import { MinusBtn } from './ShoppingCart.styled'
import {
  Title,
  Row,
  Col,
  Text,
  PrimaryButton,
  SecondaryButton,
} from '../../utils/styles/global.styled'

import { addRawOrder } from '../../store'

const ShoppingCart: React.FunctionComponent = () => {
  const [cookies, setCookie] = useCookies(['rawOrders'])
  const pizzas = useSelector((state: any) => state.pizzas.list)
  const rawOrders = useSelector((state: any) => {
    return state.rawOrders
  })
  const total =
    Object.keys(rawOrders.pizzas).reduce(
      (prev, id) => prev + rawOrders.pizzas[id].allCosts,
      0
    ) + rawOrders.sauceTotal

  const orderPizzas = Object.keys(rawOrders.pizzas).map((id) => {
    const pizza: Pizza = pizzas.find((el: { id: string }) => el.id === id)
    return (
      pizza && (
        <Order
          key={`${id}order`}
          rawOrder={rawOrders.pizzas[id]}
          pizza={pizza}
          id={id}
        />
      )
    )
  })

  useEffect(() => {
    console.log({ rawOrdersCookieShop: rawOrders })
    setCookie('rawOrders', rawOrders, { path: '/' })
  }, [rawOrders])

  const handleOrderPizzas = () => {
    const pizzaOrder: any = []
    Object.keys(rawOrders.pizzas).forEach((id) => {
      const packetsOfIngr = rawOrders.pizzas[id].additionals.map(
        (packetOfIngr) => {
          const ingr = packetOfIngr.ingredients.map((el) => el.id)
          for (let i = 0; i < packetOfIngr.amount - 1; i += 1) ingr.push(ingr)
          return { id, ingredients: ingr }
        }
      )
      pizzaOrder.push(...packetsOfIngr)
    })
    const body = {
      total,
      sauce: rawOrders.sauces,
      pizza: pizzaOrder,
    }
    fetch('http://localhost:3333/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((data) => console.log(data))
      .catch((e) => console.log(e))
  }

  return Object.keys(rawOrders.pizzas).length ? (
    <>
      <Title textAlign="center">Shopping Cart</Title>
      <Row>
        <Title fontSize="20px">Pizzas </Title>
      </Row>
      <Row margin="0 0 20px 0">{orderPizzas}</Row>
      <Row>
        <Title fontSize="20px">Sauces </Title>
      </Row>
      <Col
        justifyContent="center"
        margin="20px 0 20px 0"
        alignItems="center"
        gap="20px"
        flexWrap="wrap"
      >
        <Sauces />
      </Col>
      <Col justifyContent="flex-end">
        <Title fontSize="20px">
          Result: <Text color="var(--green)">{total} zł</Text>
        </Title>
      </Col>
      <Col justifyContent="flex-end" margin="30px 0 0 0">
        <PrimaryButton onClick={handleOrderPizzas}>Order Pizzas</PrimaryButton>
      </Col>
    </>
  ) : (
    <Row>
      <Title textAlign="center">You don&apos;t have orders</Title>
    </Row>
  )
}

export default ShoppingCart
