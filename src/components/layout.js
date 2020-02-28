import React from "react"

import "normalize.css/normalize.css"
import GlobalStyles from "../styles/global"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <GlobalStyles />
      <div>{children}</div>
    </div>
  )
}

export default Layout
