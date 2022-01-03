// libs
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'

// components
import PlusMinusInput from '../../components/plusMinusInput/PlusMinusInput'
import PizzaModal from '../../components/modal/PizzaModal'
import OrderPizzaModal from '../../components/modal/OrderPizzaModal'

// store
import { addRawOrder } from '../../store'

// utils
import useAdditional from '../../utils/hook/useAdditional'
import {
  SIZES_OF_PIZZA,
  RESULT,
  ZL,
  ADD_TO_CART,
  SIZE,
  AMOUNT,
} from '../../utils/constants'

// styles
import {
  PizzaBlock,
  PizzaInfo,
  PizzaButton,
  OptionsBlock,
  Result,
} from './PizzaPanel.styled'
import { Text, PizzaImg, Col } from '../../utils/styles/global.styled'

const PizzaPanel: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [cookies, setCookie] = useCookies(['rawOrders'])
  const [numberValue, setNumberValue] = useState(1)
  const [sizeOfPizza, setSizeOfPizza] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const {
    additional,
    setAmountPizzas,
    addAdditional,
    removeAdditional,
    setAvailableAmount,
    setAllCosts,
  } = useAdditional(undefined)
  const pizza = useSelector(
    ({ pizzas }: { pizzas: PizzaState }) =>
      pizzas.list && pizzas.list.find((el) => el.id === id)
  )

  const handleButton = (changing: number, callback): void => {
    callback((prev: number) => {
      return prev + changing
    })
  }

  const handleNumberValue = (changing: number, callback): void => {
    handleButton(changing, callback)
    setAmountPizzas(changing)
  }

  const handleOrder = (): void => {
    dispatch(
      addRawOrder({
        id,
        order: additional,
      })
    )
    setCookie(
      'rawOrders',
      {
        ...cookies.rawOrders,
        pizzas: { ...cookies.rawOrders?.pizzas, [`${id}`]: additional },
      },
      { path: '/' }
    )
    setIsOpen(true)
  }

  useEffect(() => setAllCosts(pizza?.price || 0), [])

  const pizzaPanelELement = pizza && (
    <>
      <PizzaInfo>
        {pizza.name} - {additional.allCosts} {ZL}
      </PizzaInfo>
      <PizzaImg
        src={`/${pizza.name.toLowerCase()}.png`}
        alt="Pizza"
        height="350px"
      />
      <Result>
        {RESULT}{' '}
        <Text color="var(--green)">
          {additional.allCosts} {ZL}
        </Text>
      </Result>
      <OptionsBlock>
        <Col justifyContent="center" padding="0 10px">
          <PlusMinusInput
            value={SIZES_OF_PIZZA[sizeOfPizza]}
            handleButtons={(changing) => handleButton(changing, setSizeOfPizza)}
            disabled={[
              sizeOfPizza === 0,
              sizeOfPizza === SIZES_OF_PIZZA.length - 1,
            ]}
            title={SIZE}
          />
          <PlusMinusInput
            value={numberValue}
            handleButtons={(changing) =>
              handleNumberValue(changing, setNumberValue)
            }
            disabled={[
              additional.availableAmount < 1 || numberValue <= 1,
              false,
            ]}
            title={AMOUNT}
          />
        </Col>
        <Col justifyContent="center" padding="0 10px">
          <PizzaModal
            availablePizzaAmount={additional.availableAmount}
            setAvailablePizzaAmount={setAvailableAmount}
            additional={additional}
            addAdditional={addAdditional}
            removeAdditional={removeAdditional}
            id={id}
          />
          <PizzaButton onClick={handleOrder}>{ADD_TO_CART}</PizzaButton>
        </Col>
        <OrderPizzaModal isOpen={isOpen} />
      </OptionsBlock>
    </>
  )

  return <PizzaBlock style={{ color: 'white' }}>{pizzaPanelELement}</PizzaBlock>
}

export default PizzaPanel
