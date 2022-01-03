import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { sauceSaga, ingredientSaga, pizzaSaga } from './sagas'
import allReducers from './reducers'

import { addPizza, addOrder, addRawOrder, addRawOrders } from './actionCreators'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sauceSaga)
sagaMiddleware.run(ingredientSaga)
sagaMiddleware.run(pizzaSaga)

export { addPizza, addOrder, addRawOrder, addRawOrders }
export default store
