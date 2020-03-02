import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Section, mixins, theme } from "~styles"

const { color, font } = theme
const { flex } = mixins

const HomeContainer = styled(Section)`
  ${flex.start};
  flex-direction: column;
`
const Name = styled.h1`
  color: ${color.darkPink};
  font-family: ${font.sourceSansPro};
  margin-top: 0;
`
const Title = styled.h2`
  color: ${color.darkPurple};
  font-family: ${font.sourceCodePro};
`
const Content = styled.div`
  color: ${color.light};
  font-family: ${font.openSans};
`

const Home = props => {
  const { data } = props
  const { frontmatter, html } = data[0].node

  return (
    <HomeContainer>
      <Name>{frontmatter.name}</Name>
      <Title>{frontmatter.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </HomeContainer>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home
