import styled from 'styled-components'

interface ButtonProps {
  direction: string
}

export const Button = styled.button<ButtonProps>`
  &:hover {
    filter: brightness(1.3)
  }
  &:disabled {
    opacity: 0.5;
  }
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 10px 0;
  width: 30px;
  border-bottom-${({ direction }): string => direction}-radius: 100%;
  border-top-${({ direction }): string => direction}-radius: 100%;
  border: 1px solid var(--yellow);
  background: #333;
  transition: 20ms;
  cursor: pointer;
`

export const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 10px 0;
  width: 50px;
  border: none;
  background: #333;
  color: white;
  border-top: 1px solid var(--yellow);
  border-bottom: 1px solid var(--yellow);
  -moz-appearance: textfield;
`

export const Block = styled.section`
  & + div,
  & + a,
  & + button,
  & + section {
    margin-left: 10px;
  }
`
