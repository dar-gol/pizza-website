import { call, put } from 'redux-saga/effects'
import { addIngredient, addPizza, addSauce } from '../actionCreators'
import { getIngredient, getPizza, getSauce } from './requests'

export function* handleGetSauce() {
  try {
    const data = yield call(getSauce)
    yield put(addSauce(data))
  } catch (error) {
    console.log(error)
  }
}

export function* handleGetIngredients() {
  try {
    const data = yield call(getIngredient)
    yield put(addIngredient(data))
  } catch (error) {
    console.log(error)
  }
}

export function* handleGetPizzas() {
  try {
    const data = yield call(getPizza)
    yield put(addPizza(data))
  } catch (error) {
    console.log(error)
  }
}
