import styled from 'styled-components'
import { Col } from '../../utils/styles/global.styled'

export const ColMinus = styled(Col)`
  position: relative;
`

export const MinusBtn = styled.button`
  content: '-';
  height: 20px;
  color: black;
  color: var(--yellow);
  padding: 0 5px 0 3px;
  font-weight: 600;
  position: absolute;
  right: -33px;
  /* background: var(--yellow); */
  border-bottom: 1px solid var(--yellow);
  border-top: 1px solid var(--yellow);
  border-right: 1px solid var(--yellow);
  border-left: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #444;
  box-shadow: inset 9px 0px 9px -9px rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  cursor: pointer;
  /* box-shadow: inset 9px 1px 6px -6px rgba(0, 0, 0, 1); */
  /* box-shadow: inset 9px 0px 17px -5px rgba(0, 0, 0, 1); */
  &:hover {
    z-index: 10;
  }
`
