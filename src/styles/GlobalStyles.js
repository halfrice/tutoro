import { createGlobalStyle } from "styled-components"
import theme from "./theme.yaml"

const { colors } = theme

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

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
`

export default GlobalStyles
