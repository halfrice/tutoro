import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Seo } from "~components"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { GlobalStyles } from "~styles"

const App = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <App>
          <Seo metadata={site.siteMetadata} />
          <GlobalStyles />
          {children}
        </App>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
