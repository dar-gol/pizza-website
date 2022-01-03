import { useState } from 'react'

const useAdditional = (additons): UseAdditional => {
  const [additional, setAdditional] = useState<RawOrder>(
    additons || {
      availableAmount: 1,
      allCosts: 0,
      allAmount: 1,
      additionals: [],
    }
  )

  const setAllCosts = (costs) => {
    setAdditional((prev) => ({
      ...prev,
      allCosts: costs,
    }))
  }

  const setAvailableAmount = (amount: number) => {
    setAdditional((prev) => {
      return {
        ...prev,
        availableAmount: prev.availableAmount + amount,
      }
    })
  }

  const setAmountPizzas = (changing: number) => {
    setAdditional((prev) => {
      return {
        ...prev,
        availableAmount: prev.availableAmount + changing,
        allAmount: prev.allAmount + changing,
        allCosts:
          (prev.allCosts / prev.allAmount) * (prev.allAmount + changing),
      }
    })
  }

  const addAdditional = (
    ingredients: Ingredient[],
    choosenIngredients: string[],
    amountOfPizza: number
  ): void => {
    setAdditional(({ additionals, allAmount, allCosts, availableAmount }) => {
      let costs = 0
      const map = ingredients
        .filter((ingredient) => choosenIngredients.includes(ingredient.id))
        .map((ingredient) => {
          costs += ingredient.price
          return ingredient
        })
      costs *= amountOfPizza
      return {
        allCosts: costs + allCosts,
        allAmount,
        availableAmount: availableAmount - amountOfPizza,
        additionals: [
          ...additionals,
          {
            ingredients: map,
            amount: amountOfPizza,
            costs,
          },
        ],
      }
    })
  }

  const removeAdditional = (index: number): void => {
    setAdditional(({ additionals, allAmount, allCosts, availableAmount }) => {
      const removing = additionals[index]
      const temp = [...additionals]
      temp.splice(index, 1)
      console.log(availableAmount + removing.amount)
      return {
        allCosts: allCosts - removing.costs,
        allAmount,
        availableAmount: availableAmount + removing.amount,
        additionals: temp,
      }
    })
  }
  return {
    additional,
    setAmountPizzas,
    addAdditional,
    removeAdditional,
    setAvailableAmount,
    setAllCosts,
  }
}

export default useAdditional
