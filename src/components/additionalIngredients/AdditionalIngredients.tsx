import React from 'react'

import {
  AdditionalWrapper,
  Additional,
  AdditionalAmount,
  AdditionalList,
  Minus,
} from './AdditionalIngredients.styled'

const AdditionalIngredients: React.FC<AdditionalIngredients> = ({
  additional,
  onClick,
}) => {
  return (
    <AdditionalWrapper>
      {additional.additionals.map((el, index) => {
        const ingredientsList = el.ingredients
          .map((ingredient) => ingredient.name)
          .join(', ')
        const key = Math.floor(Math.random() * (9999999 - 1)) + 1
        return (
          <Additional key={key}>
            <AdditionalList>{ingredientsList}</AdditionalList>
            <AdditionalAmount>Amount: {el.amount}</AdditionalAmount>
            <Minus onClick={() => onClick(index)} />
          </Additional>
        )
      })}
    </AdditionalWrapper>
  )
}

export default AdditionalIngredients
