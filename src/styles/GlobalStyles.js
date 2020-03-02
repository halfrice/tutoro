import { createGlobalStyle } from "styled-components"
import theme from "./theme.yaml"
import device from "./device"

const { color, font, fontSize } = theme

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
    background-color: ${color.dark};
    color: ${color.light};
    font-family: ${font.openSans};
    font-size: ${fontSize.md};
    ${device.tablet`font-size: ${fontSize.sm};`};
    font-weight: 400;
    line-height: 1.35;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
  }

  pre {
    padding: 0.5em !important;
  }

  code {
    font-family: ${font.sourceCodePro} !important;
    font-size: ${fontSize.xs} !important;
  }

  
`

export default GlobalStyles
