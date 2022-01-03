type OrderPizzaModal = {
  isOpen: boolean
  clearData?: (close: any) => void
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
