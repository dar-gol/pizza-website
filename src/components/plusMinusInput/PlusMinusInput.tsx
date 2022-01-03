import React from 'react'

// styles
import { Block, Input, Button } from './PlusMinusInput.styled'
import { Row, Col, Title } from '../../utils/styles/global.styled'

const PlusMinusInput: React.FunctionComponent<PlusMinusInput> = ({
  value,
  handleButtons,
  disabled,
  title,
}) => {
  return (
    <Block>
      <Row margin="0 0 0 3px">
        <Title fontSize="14px" textAlign="center">
          {title}:{' '}
        </Title>
      </Row>
      <Col justifyContent="center">
        <Button
          disabled={disabled[0]}
          direction="left"
          type="button"
          onClick={() => handleButtons(-1)}
        >
          -
        </Button>
        <Input type="text" value={value} disabled />
        <Button
          disabled={disabled[1]}
          direction="right"
          type="button"
          onClick={() => handleButtons(1)}
        >
          +
        </Button>
      </Col>
    </Block>
  )
}

export default PlusMinusInput
