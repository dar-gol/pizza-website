import styled, { css, createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

type BlockType = {
  flex?: string
  alignItems?: string
  justifyContent?: string
  margin?: string
  padding?: string
  position?: string
  gap?: string
  flexWrap?: string
  responsive?: boolean
}

type TextType = {
  color?: string
  fontSize?: string
  fontWeight?: string
  textAlign?: string
  whiteSpace?: string
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #eeee9b;
    --grey: #958c8c;
    --green: #93c572;
  }
`

export const Button = css`
  --border-color: transparent;
  --background-color: transparent;
  --text-color: white;
  &:hover {
    text-decoration: underline;
  }
  & + a,
  & + button {
    margin-left: 10px;
  }
  &.disabled {
    pointer-events: none;
    cursor: default;
  }
  &.attention:after {
    content: '!';
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    color: white !important;
  }
  position: relative;
  padding: 10px 0;
  min-width: 150px;
  border-radius: 60px;
  color: white;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: 0.2s;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  text-decoration: none;
`

export const SecondaryButtonCss = css`
  ${Button}
  &:hover {
    --background-color: var(--yellow);
    --text-color: black;
    --border-color: transparent;
  }
  --border-color: var(--yellow);
`

export const PrimaryButtonCss = css`
  ${Button}
  &:hover {
    --background-color: transparent;
    --text-color: white;
    --border-color: var(--yellow);
  }
  --background-color: var(--yellow);
  --text-color: black;
`

export const Container = styled.div`
  background-color: #333;
  width: 100vw;
`

export const Div = styled.section<BlockType>`
  flex: ${({ flex }) => flex || 0};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  position: ${({ position }) => position || 'static'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
`

export const Text = styled.span<TextType>`
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
  white-space: ${({ whiteSpace }) => whiteSpace || 'wrap'};
`

export const Title = styled.header<TextType>`
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || '22px'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export const Row = styled(Div)`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: ${({ responsive }) => (responsive ? 'row' : 'column')};
    gap: ${({ gap }) => gap || '0'};
  }
`

export const Col = styled(Div)`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: ${({ responsive }) => (responsive ? 'column' : 'row')};
    gap: ${({ gap }) => gap || '0'};
  }
`

export const SecondaryButton = styled.button`
  ${SecondaryButtonCss}
`

export const PrimaryButton = styled.button`
  ${PrimaryButtonCss}
`

export const SecondaryLink = styled(Link)`
  ${SecondaryButtonCss}
`

export const PrimaryLink = styled(Link)`
  ${PrimaryButtonCss}
`

export const Content = styled.main`
  background-color: #222;
  margin: 50px;
  padding: 20px;
  height: 70%;
  border-radius: 60px;
  text-align: center;
  @media (max-width: 680px) {
    border-radius: 0;
    margin: 0;
    margin-top: 30px;
  }
`

export const PizzaImg = styled.img`
  height: ${({ height }) => height || '100%'};
`
