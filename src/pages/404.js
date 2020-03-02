import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "~components"
import { Main, Section, mixins, theme } from "~styles"

const { flex } = mixins
const { color } = theme

const NotFoundContainer = styled(Section)`
  ${flex.start};
  flex-direction: column;
  width: 100%;
`
const Name = styled.h1`
  color: ${color.red};
`
const Description = styled.h2`
  color: ${color.darkSlate};
`
const HomeLink = styled(Link)`
  color: ${color.lightGreen};
`

const NotFoundPage = () => (
  <Layout>
    <Main>
      <NotFoundContainer>
        <Name>Error 404</Name>
        <Description>Page Not Found</Description>
        <HomeLink to="/">Home</HomeLink>
      </NotFoundContainer>
    </Main>
  </Layout>
)

export default NotFoundPage
