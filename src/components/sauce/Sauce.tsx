import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addOrderSauce } from '../../store/actionCreators'

import PlusMinusInput from '../plusMinusInput/PlusMinusInput'

const Sauce = ({ id, name, price }: any) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(0)
  const total = useSelector((state: any) => state.rawOrders.sauceTotal)
  const rawOrdersSauce = useSelector((state: any) =>
    state.rawOrders.sauces.find((el) => id === el.id)
  )
  useEffect(() => {
    const amount = rawOrdersSauce?.count || 0
    setValue(amount)
  }, [])
  const handleButtons = (changing) => {
    setValue((prev) => prev + changing)
    const amount = rawOrdersSauce?.count || 0
    const sum = total - amount * price + (amount + changing) * price
    console.log({ changing, amount, sum })
    dispatch(addOrderSauce(id, changing, sum))
  }
  return (
    <PlusMinusInput
      title={`${name} (${price} zł)`}
      value={value}
      disabled={[value === 0, false]}
      handleButtons={handleButtons}
    />
  )
}

export default Sauce
