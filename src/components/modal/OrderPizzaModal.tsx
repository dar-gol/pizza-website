// libs
import React from 'react'
import Popup from 'reactjs-popup'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// styles
import { SuccessIcon } from './PizzaModal.styled'
import {
  PrimaryLink,
  SecondaryLink,
  Row,
  Col,
  Title,
} from '../../utils/styles/global.styled'

const OrderPizzaModal: React.FC<OrderPizzaModal> = ({ isOpen }) => {
  return (
    <Popup
      open={isOpen}
      modal
      nested
      closeOnDocumentClick={false}
      closeOnEscape={false}
    >
      {() => (
        <Row alignItems="center">
          <SuccessIcon icon={faCheckCircle} />
          <Title fontSize="20px" textAlign="center">
            You have added the pizzas to the cart! <br /> . . . so you can:
          </Title>
          <Col justifyContent="flex-end" margin="20px 0 0 0">
            <PrimaryLink to="/menu">Menu</PrimaryLink>
            <SecondaryLink to="/shop">Shopping cart</SecondaryLink>
          </Col>
        </Row>
      )}
    </Popup>
  )
}

export default OrderPizzaModal
