import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { Section, mixins, theme } from "~styles"

const { color, font } = theme
const { flex } = mixins

const HomeContainer = styled(Section)`
  ${flex.start};
  flex-direction: column;
`
const TransitionContainer = styled(TransitionGroup)`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  const { frontmatter, html } = props.data[0].node

  const name = () => (
    <Name style={{ transitionDelay: "200ms" }}>{frontmatter.name}</Name>
  )
  const title = () => (
    <Title style={{ transitionDelay: "400ms" }}>{frontmatter.title}</Title>
  )
  const content = () => (
    <Content
      style={{ transitionDelay: "600ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    >
      {frontmatter.content}
    </Content>
  )

  const items = [name, title, content]

  return (
    <HomeContainer>
      <TransitionContainer>
        {isMounted &&
          items.map((item, i) => {
            return (
              <CSSTransition key={i} classNames={`fadeup`} timeout={3000}>
                {item}
              </CSSTransition>
            )
          })}
      </TransitionContainer>
    </HomeContainer>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home
