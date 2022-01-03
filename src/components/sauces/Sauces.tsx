import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Sauce from '../sauce/Sauce'

const Sauces = (params) => {
  const sauces = useSelector((state: any) => state.sauces.list)
  return (
    sauces &&
    sauces.map((sauce) => (
      <Sauce
        key={`${sauce.id}Sauce`}
        amount={1}
        id={sauce.id}
        name={sauce.name}
        price={sauce.price}
      />
    ))
  )
}

export default Sauces
