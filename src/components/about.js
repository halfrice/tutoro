import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { Section, theme } from "~styles"

const { color, font } = theme

const AboutContainer = styled(Section)`
  margin: 0 auto;
  min-height: calc(80vh);
`
const TransitionContainer = styled(TransitionGroup)`
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
`
const Title = styled.h2`
  color: ${color.darkPurple};
  font-family: ${font.sourceCodePro};
`
const Content = styled.div`
  color: ${color.light};
  font-family: ${font.openSans};
`

const About = props => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  const { frontmatter, html } = props.data[0].node

  const title = () => (
    <Title style={{ transitionDelay: "200ms" }}>{frontmatter.title}</Title>
  )
  const content = () => (
    <Content
      style={{ transitionDelay: "400ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    >
      {frontmatter.content}
    </Content>
  )

  const items = [title, content]

  return (
    <AboutContainer>
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
    </AboutContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
