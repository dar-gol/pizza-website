// libs
import React from 'react'
import Popup from 'reactjs-popup'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// styles
import { SuccessIcon } from './PizzaModal.styled'
import {
  PrimaryButton,
  Row,
  Col,
  Title,
} from '../../utils/styles/global.styled'

const OrderModal: React.FC<OrderPizzaModal> = ({ isOpen, clearData }) => {
  return (
    <Popup
      open={isOpen}
      modal
      nested
      closeOnDocumentClick={false}
      closeOnEscape={false}
    >
      {(close) => (
        <Row alignItems="center">
          <SuccessIcon icon={faCheckCircle} />
          <Title fontSize="20px" textAlign="center">
            You order your Pizza!
          </Title>
          <Col justifyContent="flex-end" margin="20px 0 0 0">
            <PrimaryButton
              onClick={() =>
                clearData !== undefined ? clearData(close) : close()
              }
            >
              Menu
            </PrimaryButton>
          </Col>
        </Row>
      )}
    </Popup>
  )
}

export default OrderModal
