import styled from 'styled-components'

export const Additional = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`

export const AdditionalAmount = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 5px;
  border-top: 1px solid var(--yellow);
  border-bottom: 1px solid var(--yellow);
`

export const AdditionalList = styled.div`
  padding: 5px;
  flex-grow: 1;
  border: 1px solid var(--yellow);
  border-right: none;
`

export const Minus = styled.button`
  &:after {
    content: '-';
    font-weight: 600;
  }
  &:hover {
    color: black;
    background-color: var(--yellow);
  }
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid var(--yellow);
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  background-color: transparent;
  color: white;
  cursor: pointer;
`

export const AdditionalWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  font-size: 13px;
  max-height: 150px;
  overflow-y: scroll;
  @media (max-width: 500px) {
    max-height: unset;
    margin-top: 36px;
  }
`
