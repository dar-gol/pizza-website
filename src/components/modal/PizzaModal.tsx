// libs
import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// css
import './PizzaModal.css'

// components
import AdditionalIngredients from '../additionalIngredients/AdditionalIngredients'
import IngredientsCheckboxes from '../ingredientsCheckboxes/IngredientsCheckboxes'
import PlusMinusInput from '../plusMinusInput/PlusMinusInput'

// utils
import { getDefaultIngredients } from '../../utils/script'
import useChoosenIngredients from '../../utils/hook/useChoosenIngredients'
import {
  ZL,
  CUSTOMIZE_PIZZAS,
  LIST_OF_INGREDIENTS,
  PIZZA,
  ADDITIONAL_COSTS,
  SAVE,
  ADD,
  AMOUNT,
} from '../../utils/constants'

// styled
import { PizzaSecondaryButton } from '../../views/pizzaPanel/PizzaPanel.styled'
import { DefaultIngredients, ModalImg } from './PizzaModal.styled'
import {
  PrimaryButton,
  SecondaryButton,
  Text,
  Row,
  Col,
  Title,
} from '../../utils/styles/global.styled'

const PizzaModal: React.FC<PizzaModal> = ({
  availablePizzaAmount,
  additional,
  addAdditional,
  removeAdditional,
  id,
}) => {
  const pizza: Pizza = useSelector(({ pizzas }: PizzasState) => {
    const { list }: PizzaState = pizzas
    return (
      list.find((el) => el.id === id) ?? {
        id: '',
        name: '',
        price: 0,
        ingredients: [],
      }
    )
  })
  const ingredients: Ingredient[] = useSelector(
    ({ ingredients: listOfIngredients }: IngredientsState) =>
      listOfIngredients.list
  )

  const [amountOfPizza, setAmountOfPizza] = useState(1)
  const { choosenIngredients, handleChoosen, resetChoosen } =
    useChoosenIngredients()

  const handleButton = (changing: number): void => {
    setAmountOfPizza((prev: number) => {
      return prev + changing
    })
  }

  const handleAddButton = () => {
    setAmountOfPizza(1)
    addAdditional(ingredients, choosenIngredients, amountOfPizza)
    resetChoosen()
  }

  const handleRemoveIngredients = (index: number): void => {
    removeAdditional(index)
  }

  const handleSave = (close) => {
    resetChoosen()
    close()
  }

  const pizzaIngredients = getDefaultIngredients(ingredients, pizza.ingredients)
  const ingredientsToChoose = ingredients.filter(
    (ingr) => !pizza.ingredients.includes(ingr.id)
  )

  return (
    <Popup
      trigger={
        <PizzaSecondaryButton
          type="button"
          className={`button ${additional.additionals.length && 'attention'}`}
        >
          {CUSTOMIZE_PIZZAS}
        </PizzaSecondaryButton>
      }
      modal
      nested
    >
      {(close) => (
        <>
          <Row>
            <Row alignItems="center">
              <Title fontSize="20px" textAlign="center">
                {pizza.name}
              </Title>
              <DefaultIngredients>{pizzaIngredients}</DefaultIngredients>
            </Row>
            <Col margin="10px 0 0 0">
              <Row>
                <>
                  <Text fontWeight="600">{LIST_OF_INGREDIENTS}</Text>
                  <IngredientsCheckboxes
                    ingredients={ingredientsToChoose}
                    choosenIngredients={choosenIngredients}
                    onClick={handleChoosen}
                  />
                </>
                <PlusMinusInput
                  value={availablePizzaAmount ? amountOfPizza : 0}
                  handleButtons={(changing) => handleButton(changing)}
                  disabled={[
                    amountOfPizza === 1,
                    amountOfPizza >= availablePizzaAmount,
                  ]}
                  title={AMOUNT}
                />
              </Row>
              <Row alignItems="center" flex="1">
                <ModalImg
                  src={`/${pizza.name}.png`}
                  alt={PIZZA}
                  height="250px"
                />
                <AdditionalIngredients
                  additional={additional}
                  onClick={handleRemoveIngredients}
                />
              </Row>
            </Col>
          </Row>
          <Row alignItems="flex-end">
            <Text fontWeight="600" fontSize="20px">
              {ADDITIONAL_COSTS}{' '}
              <Text color="var(--green)">
                {additional.allCosts} {ZL}
              </Text>
            </Text>
          </Row>
          <Col margin="20px 0 0 0" justifyContent="flex-end">
            <PrimaryButton
              className={availablePizzaAmount ? '' : 'disabled'}
              onClick={handleAddButton}
            >
              {ADD}
            </PrimaryButton>
            <SecondaryButton onClick={() => handleSave(close)}>
              {SAVE}
            </SecondaryButton>
          </Col>
        </>
      )}
    </Popup>
  )
}

export default PizzaModal
