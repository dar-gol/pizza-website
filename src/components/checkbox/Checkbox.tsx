import React from 'react'

import { Wrapper, Plus, TextWrapper } from './Checkbox.styled'

const Checkbox: React.FC<Checkbox> = ({ name, price, onClick, isActive }) => {
  return (
    <Wrapper onClick={onClick}>
      <Plus className={isActive ? 'active' : ''} />
      <TextWrapper>
        {name} {price} zł
      </TextWrapper>
    </Wrapper>
  )
}

export default Checkbox
