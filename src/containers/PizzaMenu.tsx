// libs
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

// script
import { getDefaultIngredients } from '../utils/script'

// style
import { PizzaLink } from '../views/menu/Menu.styled'

// views
import Menu from '../views/menu/Menu'

const PizzaMenu = (): JSX.Element => {
  const { url } = useRouteMatch()
  const pizzaLists: Pizza[] = useSelector(({ pizzas }: PizzasState) => {
    return pizzas.list
  })

  const ingredientLists: Ingredient[] = useSelector(
    ({ ingredients }: IngredientsState) => ingredients.list
  )

  const listPizza: React.ReactNode =
    pizzaLists &&
    pizzaLists.map((pizza: Pizza) => {
      const pizzaIngredients: string = getDefaultIngredients(
        ingredientLists,
        pizza.ingredients
      )

      return (
        <PizzaLink key={pizza.id} to={`${url}/${pizza.id}`}>
          {pizza.name} {pizzaIngredients}
        </PizzaLink>
      )
    })

  return <Menu listPizza={listPizza} url={url} />
}

export default PizzaMenu
