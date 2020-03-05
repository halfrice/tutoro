import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Section, mixins, theme } from "~styles"

const { color, font } = theme
const { flex } = mixins

const TutorialsContainer = styled(Section)`
  ${flex.center};
`
const ContentContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
`
const Title = styled.h1`
  font-family: ${font.sourceSansPro};
  color: ${color.aqua};
  margin-top: 0;
`
const Subtitle = styled.h3`
  font-family: ${font.sourceCodePro};
  color: ${color.peach};
`
const Content = styled.div`
  color: light;
`

const Tutorials = props => {
  const { frontmatter, html } = props.data[0].node

  const content = () => <Content dangerouslySetInnerHTML={{ __html: html }} />

  return (
    <TutorialsContainer>
      <ContentContainer>
        <Title>{frontmatter.title}</Title>
        <Subtitle>{frontmatter.subtitle}</Subtitle>
        {content()}
      </ContentContainer>
    </TutorialsContainer>
  )
}

Tutorials.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Tutorials
