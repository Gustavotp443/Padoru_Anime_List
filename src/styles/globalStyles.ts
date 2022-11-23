import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

body,html{
  background:${props => props.theme.colors.background};
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.colors.text};
  transition: 1s ease;
}

`
export default GlobalStyle;

export const Container = styled.section`
 max-width: 1280px;
 margin: 0 auto;
`
