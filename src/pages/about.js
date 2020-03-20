import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { About } from "~components"
import { Main } from "~styles"

const AboutPage = ({ data }) => {
  return (
    <Main>
      <About data={data.about.edges} />
    </Main>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const indexPageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
