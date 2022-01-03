// eslint-disable-next-line import/prefer-default-export
export const getDefaultIngredients = (
  all: Ingredient[],
  defaults: Ingredient['id'][]
): string => {
  let pizzaIngredients = ''
  defaults.forEach((id) => {
    const ing = all.find((el) => el.id === id)
    pizzaIngredients += ing && `${ing.name}, `
  })

  return pizzaIngredients.slice(0, -2)
}

export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}
