import { createGlobalStyle } from "styled-components"
import theme from "./theme.yaml"

const { colors } = theme

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.dark};
    color: ${colors.light};
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.darkPink};
    font-weight: 600;
  }

  #root {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    min-height: 100vh;
  }
`
export default GlobalStyles
