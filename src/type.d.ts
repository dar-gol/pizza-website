interface Sauce {
  id?: string
  name?: string
  price?: number
  count?: number
}

interface Ingredient {
  id: string
  name: string
  price: number // if extra needed!
}

interface Pizza {
  id: string
  name: string
  price: number
  ingredients: Ingredient['id'][]
}

type SauceState = {
  list: Sauce[]
  isLoaded: boolean
}

type SaucesState = {
  sauces: SauceState
}

type IngredientState = {
  list: Ingredient[]
  isLoaded: boolean
}

type IngredientsState = {
  ingredients: IngredientState
}

type PizzaState = {
  list: Pizza[]
  isLoaded: boolean
}

type PizzasState = {
  pizzas: PizzaState
}

type SauceAction = {
  type: string
  sauce: Sauce
}

type IngredientAction = {
  type: string
  ingredient: Ingredient
}

type PizzaAction = {
  type: string
  pizza: Pizza
}

type SaucesAction = {
  type: string
  sauce: Sauce[]
}

type SaucesOrder = {
  id: string
  count: number
}

type IngredientsAction = {
  type: string
  ingredient: Ingredient[]
}

type PizzasAction = {
  type: string
  pizza: Pizza[]
}

type PizzaOrder = {
  id: string
  ingredients: string[]
}

interface Order {
  pizza: PizzaOrder[]
  sauce: Sauce[]
  total: number
  isVoid?: boolean
}

type OrderAction = {
  type: string
  order: Order
}

type PizzaAdditional = {
  amount: number
  ingredients: Ingredient[]
  costs: number
}

interface RawOrder {
  allCosts: number
  allAmount: number
  availableAmount: number
  additionals: PizzaAdditional[]
}

type RawOrderState = {
  id: string
  order: RawOrder
}

type RawOrders = {
  pizzas: {
    [id: string]: RawOrder
  }
  total: number
  allAmount: number
  sauces: SaucesOrder[]
  sauceTotal: number
}

type RawOrdersAction = {
  type: string
  order: RawOrders
}

type RawOrderAction = {
  type: string
  order?: {
    [id: string]: RawOrder
  }
  id?: string
  changing?: number
  total?: number
}

type Get = {
  type: string
}
