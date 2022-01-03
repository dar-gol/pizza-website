import React, { ReactNode, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from 'react-loading-screen'

import { getPizza, getIngredient, getSauce } from '../../store/actionCreators'

export default (Cmp: React.FunctionComponent): React.FC<ReactNode> =>
  () => {
    const dispatch = useDispatch()
    const saucesLoaded = useSelector(
      ({ sauces }: SaucesState) => sauces.isLoaded
    )
    const ingredientsLoaded = useSelector(
      ({ ingredients }: IngredientsState) => ingredients.isLoaded
    )
    const pizzasLoaded = useSelector(
      ({ pizzas }: PizzasState) => pizzas.isLoaded
    )
    useEffect(() => {
      if (!saucesLoaded) dispatch(getSauce())
      if (!ingredientsLoaded) dispatch(getIngredient())
      if (!pizzasLoaded) dispatch(getPizza())
    }, [])
    return (
      <LoadingScreen
        loading={!saucesLoaded && !ingredientsLoaded && !pizzasLoaded}
        bgColor="#333"
        spinnerColor="var(--yellow)"
        textColor="#676767"
        logoSrc="/logo.svg"
      >
        <Cmp />
      </LoadingScreen>
    )
  }
