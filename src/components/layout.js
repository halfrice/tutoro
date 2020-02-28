import React from "react"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <h2>Layout</h2>
      <div>{children}</div>
    </div>
  )
}

export default Layout
