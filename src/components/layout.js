import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Seo } from "~components"
import "normalize.css/normalize.css"
import GlobalStyles from "~styles/global"

const Layout = ({ children }) => {
  return (
    <div id="root">
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
          <div id="root">
            <Seo metadata={site.siteMetadata} />
            <GlobalStyles />
            <div className="site-content">{children}</div>
          </div>
        )}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
