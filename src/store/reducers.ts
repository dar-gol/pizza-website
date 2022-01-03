import { combineReducers } from 'redux'
import {
  sauceReducer,
  ingredientReducer,
  pizzaReducer,
  orderReducer,
  rawOrderReducer,
} from './reducer'

const allReducers = combineReducers({
  sauces: sauceReducer,
  ingredients: ingredientReducer,
  pizzas: pizzaReducer,
  orders: orderReducer,
  rawOrders: rawOrderReducer,
})

export default allReducers
