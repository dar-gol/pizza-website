type ChoosenIngredients = {
  choosenIngredients: string[]
  handleChoosen: (index: string) => void
  resetChoosen: () => void
}

type UseAdditional = {
  additional: RawOrder
  addAdditional: (
    ingredients: Ingredient[],
    choosenIngredients: string[],
    amountOfPizza
  ) => void
  removeAdditional: (index: number) => void
  setAmountPizzas: (changing: number) => void
  setAvailableAmount: (amount: number) => void
  setAllCosts: (costs: number) => void
}
