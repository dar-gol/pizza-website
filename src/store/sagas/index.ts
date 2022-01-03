import { takeLatest } from 'redux-saga/effects'
import {
  handleGetIngredients,
  handleGetPizzas,
  handleGetSauce,
} from './handlers'
import { GET_INGREDIENT, GET_PIZZA, GET_SAUCE } from '../actionTypes'

export function* sauceSaga() {
  yield takeLatest(GET_SAUCE, handleGetSauce)
}

export function* ingredientSaga() {
  yield takeLatest(GET_INGREDIENT, handleGetIngredients)
}

export function* pizzaSaga() {
  yield takeLatest(GET_PIZZA, handleGetPizzas)
}
