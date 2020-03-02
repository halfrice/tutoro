import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Home, Layout } from "~components"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Home data={data.home.edges} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexPageQuery = graphql`
  {
    home: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
      edges {
        node {
          frontmatter {
            name
            title
          }
          html
        }
      }
    }
  }
`
