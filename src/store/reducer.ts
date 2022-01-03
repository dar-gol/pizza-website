import {
  ADD_PIZZA,
  ADD_ORDER,
  ADD_INGREDIENT,
  ADD_SAUCE,
  ADD_RAW_ORDER,
  ADD_RAW_ORDERS,
  REMOVE_RAW_ORDER,
  ADD_ORDER_SAUCE,
  CLEAR_RAW_ORDER,
} from './actionTypes'

const initialSauces: SauceState = {
  list: [],
  isLoaded: false,
}

const initialIngredients: IngredientState = {
  list: [],
  isLoaded: false,
}

const initialPizzas: PizzaState = {
  list: [],
  isLoaded: false,
}

const initialOrders: Order = {
  pizza: [],
  sauce: [],
  total: 0,
  isVoid: true,
}

const initialRawOrders: RawOrders = {
  pizzas: {},
  total: 0,
  sauceTotal: 0,
  allAmount: 0,
  sauces: [],
}

export const sauceReducer = (
  state: SauceState = initialSauces,
  action: SaucesAction
): SauceState => {
  switch (action.type) {
    case ADD_SAUCE:
      return {
        ...state,
        list: [...state.list, ...action.sauce],
        isLoaded: true,
      }
    default:
      return state
  }
}

export const ingredientReducer = (
  state: IngredientState = initialIngredients,
  action: IngredientsAction
): IngredientState => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        list: [...state.list, ...action.ingredient],
        isLoaded: true,
      }
    default:
      return state
  }
}

export const pizzaReducer = (
  state: PizzaState = initialPizzas,
  action: PizzasAction
): PizzaState => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        list: [...state.list, ...action.pizza],
        isLoaded: true,
      }
    default:
      // console.trace('reducer default', state)
      return state
  }
}

export const orderReducer = (
  state: Order = initialOrders,
  action: OrderAction
): Order => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        pizza: [...state.pizza, ...action.order.pizza],
        sauce: action.order.sauce,
        total: state.total + action.order.total,
        isVoid: false,
      }
    default:
      return state
  }
}

export const rawOrderReducer = (
  state: RawOrders = initialRawOrders,
  action: RawOrderAction
): RawOrders => {
  switch (action.type) {
    case ADD_RAW_ORDERS: {
      return { ...state, ...action.order }
    }
    case ADD_RAW_ORDER:
      return {
        ...state,
        pizzas: {
          ...state.pizzas,
          ...action.order,
        },
      }
    case ADD_ORDER_SAUCE:
      console.log(action)
      if (action.id && action.changing && typeof action.total !== 'undefined') {
        const saucesCopy = [...state.sauces]
        const sauceIndex = state.sauces.findIndex((el) => {
          return el.id === action.id
        })
        if (sauceIndex > -1) saucesCopy[sauceIndex].count += action.changing
        else saucesCopy.push({ id: action.id, count: 1 })
        return {
          ...state,
          sauces: saucesCopy,
          sauceTotal: action.total,
        }
      }
      return state
    case REMOVE_RAW_ORDER: {
      const copy: RawOrders = { ...state }
      if (action.id) delete copy.pizzas[action.id]
      return { ...copy }
    }
    case CLEAR_RAW_ORDER: {
      return initialRawOrders
    }
    default:
      return state
  }
}
