import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Home, Layout, Tutorials } from "~components"
import { Main } from "~styles"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Home data={data.home.edges} />
        <Tutorials data={data.tutorials.edges} />
      </Main>
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
    tutorials: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/tutorials/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
          }
          html
        }
      }
    }
  }
`
