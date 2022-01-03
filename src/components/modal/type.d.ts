type OrderPizzaModal = {
  isOpen: boolean
}

type PizzaModal = {
  availablePizzaAmount: number
  setAvailablePizzaAmount: (amount: number) => void
  additional: RawOrder
  addAdditional: (
    ingredients: Ingredient[],
    choosenIngredients: string[],
    amountOfPizza
  ) => void
  removeAdditional: (index: number) => void
  id: string
}
