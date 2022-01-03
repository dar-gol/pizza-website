import styled from 'styled-components'

export const Plus = styled.div`
  display: flex;
  &:after {
    font-weight: 700;
    content: '+';
    padding: 5px;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    border: 1px solid var(--yellow);
  }
  &.active:after {
    background-color: var(--yellow);
    color: black;
  }
`

export const TextWrapper = styled.div`
  border: 1px solid var(--yellow);
  padding: 5px;
  border-left: none;
  font-size: 13px;
  width: 100%;
  transition: 0.1s;
`

export const Wrapper = styled.div`
  display: flex;
  margin: 5px;
  border-radius: 30px;
  cursor: pointer;
  width: 120px;
  &:hover > ${TextWrapper} {
    background-color: var(--yellow);
    color: black;
  }
`
