import React from 'react'

import Checkbox from '../checkbox/Checkbox'

const IngredientsCheckboxes: React.FC<IngredientsCheckboxes> = ({
  ingredients,
  onClick,
  choosenIngredients,
}) => {
  return (
    <>
      {ingredients.map(({ name, price, id }: Ingredient) => (
        <Checkbox
          key={`${id}checkbox`}
          name={name}
          price={price}
          onClick={() => onClick(id)}
          isActive={choosenIngredients.includes(id)}
        />
      ))}
    </>
  )
}

export default IngredientsCheckboxes
