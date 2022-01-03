import {
  ADD_INGREDIENT,
  ADD_ORDER,
  ADD_PIZZA,
  ADD_SAUCE,
  ADD_RAW_ORDER,
  GET_INGREDIENT,
  GET_PIZZA,
  GET_SAUCE,
  REMOVE_RAW_ORDER,
  ADD_ORDER_SAUCE,
  ADD_RAW_ORDERS,
} from './actionTypes'

export const getSauce = (): Get => ({
  type: GET_SAUCE,
})

export const getIngredient = (): Get => ({
  type: GET_INGREDIENT,
})

export const getPizza = (): Get => ({
  type: GET_PIZZA,
})

export function addSauce(sauce: Sauce): SauceAction {
  const action: SauceAction = {
    type: ADD_SAUCE,
    sauce,
  }

  return action
}

export function addIngredient(ingredient: Ingredient): IngredientAction {
  const action: IngredientAction = {
    type: ADD_INGREDIENT,
    ingredient,
  }

  return action
}

export function addPizza(pizza: Pizza): PizzaAction {
  const action: PizzaAction = {
    type: ADD_PIZZA,
    pizza,
  }

  return action
}

export function addOrder(order: Order): OrderAction {
  const action: OrderAction = {
    type: ADD_ORDER,
    order,
  }

  return action
}

export function addRawOrder(rawOrder: RawOrderState): RawOrderAction {
  const action: RawOrderAction = {
    type: ADD_RAW_ORDER,
    order: { [`${rawOrder.id}`]: { ...rawOrder.order } },
  }

  return action
}

export function addRawOrders(rawOrders: RawOrders): RawOrdersAction {
  console.log({ rawOrders })
  const action: RawOrdersAction = {
    type: ADD_RAW_ORDERS,
    order: { ...rawOrders },
  }

  return action
}

export function removeRawOrder(id: string): RawOrderAction {
  const action: RawOrderAction = {
    type: REMOVE_RAW_ORDER,
    id,
  }

  return action
}

export function addOrderSauce(
  id: string,
  changing: number,
  total: number
): RawOrderAction {
  const action: RawOrderAction = {
    type: ADD_ORDER_SAUCE,
    id,
    changing,
    total,
  }
  return action
}
