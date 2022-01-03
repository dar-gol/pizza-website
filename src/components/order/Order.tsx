// libs
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useCookies } from 'react-cookie'

import {
  Col,
  Text,
  Row,
  SecondaryButton,
} from '../../utils/styles/global.styled'

import { MinusBtn } from '../../views/shoppingCart/ShoppingCart.styled'

import useAdditional from '../../utils/hook/useAdditional'

import PlusMinusInput from '../plusMinusInput/PlusMinusInput'

import PizzaModal from '../modal/PizzaModal'

import { addRawOrder } from '../../store'
import { AMOUNT } from '../../utils/constants'
import { removeRawOrder } from '../../store/actionCreators'

const Order = ({ rawOrder, pizza, id }: any) => {
  const dispatch = useDispatch()
  const [cookies, setCookie] = useCookies(['rawOrders'])
  const {
    additional,
    setAmountPizzas,
    setAvailableAmount,
    addAdditional,
    removeAdditional,
  } = useAdditional(rawOrder)

  const handleRemove = () => {
    dispatch(removeRawOrder(id))
  }

  useEffect(() => {
    dispatch(
      addRawOrder({
        id,
        order: additional,
      })
    )
  }, [additional])

  const additionalElement =
    additional.additionals &&
    additional.additionals.map((additon) => {
      const ingredientElement = additon.ingredients
        .map((ingr) => ingr.name)
        .join(', ')
      return (
        <Col>
          <Col>
            <Text whiteSpace="nowrap" fontSize="14px" color="var(--grey)">
              {additon.amount}x pizza with:
            </Text>
          </Col>
          <Col flex="1" margin="0 0 0 30px">
            <Text fontSize="14px" color="var(--grey)">
              {ingredientElement}
            </Text>
          </Col>
          <Col>
            <Text fontSize="14px" color="var(--grey)" whiteSpace="nowrap">
              + {additon.costs} zł
            </Text>
          </Col>
        </Col>
      )
    })

  return (
    pizza && (
      <>
        <Col position="relative" margin="20px 0 10px 0">
          <Col>
            <Text>{additional.allAmount}x</Text>
          </Col>
          <Col margin="0 0 0 30px" flex="1">
            <Text>{pizza.name}</Text>
          </Col>
          <Col>
            <Text whiteSpace="nowrap">{additional.allCosts} zł</Text>
          </Col>
        </Col>
        <Col margin="0 0 0 30px">
          <Text fontSize="14px" color="var(--grey)">
            {additionalElement?.length ? 'Dodatki: ' : ''}
          </Text>
        </Col>
        <Row margin="0 0 0 30px">{additionalElement}</Row>
        <Col
          margin="20px 0 0 0"
          justifyContent="space-between"
          responsive
          gap="10px"
        >
          <PlusMinusInput
            value={additional.allAmount}
            handleButtons={setAmountPizzas}
            disabled={[
              additional.availableAmount < 1 || additional.allAmount <= 1,
              false,
            ]}
            title={AMOUNT}
          />
          <Col alignItems="end" justifyContent="center">
            <SecondaryButton onClick={handleRemove}>
              Remove Pizzas
            </SecondaryButton>
            <PizzaModal
              availablePizzaAmount={additional.availableAmount}
              setAvailablePizzaAmount={setAvailableAmount}
              additional={additional}
              addAdditional={addAdditional}
              removeAdditional={removeAdditional}
              id={id}
            />
          </Col>
        </Col>
      </>
    )
  )
}

export default Order
