import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { navbarLinks } from "~config"
import { Main, mixins, theme } from "~styles"
import { throttle, useEventListener } from "~utils"

const { color, font, navbar } = theme
const { flex } = mixins

const NavbarContainer = styled(Main)`
  ${flex.start};
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props =>
    props.scrollDirection === "none" ? navbar.height : navbar.dirtyHeight};
  background-color: ${props =>
    props.scrollDirection === "none" ? "transparent" : color.black};
  transition: ${theme.transition};
  font-family: ${font.sourceCodePro};
  z-index: 10;
`
const LogoLink = styled(Link)`
  ${flex.center};
`
const Logo = styled.div`
  margin: 0 10px 0 0;
`
const NavbarList = styled.ol`
  ${flex.center};
  list-style: none !important;
  div {
    ${flex.between};
  }
`
const NavbarListItem = styled.li`
  margin: 0 10px;
`
const NavbarLink = styled(Link)`
  ${flex.center};
`

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("none")
  const [prevY, setPrevY] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const scrollHandler = useCallback(
    throttle(() => {
      const y = window.scrollY
      const delta = 4

      if (!isMounted || Math.abs(prevY - y) <= delta) {
        return
      }

      if (y < delta) {
        setScrollDirection("none")
      } else if (y > prevY) {
        if (scrollDirection !== "down") {
          setScrollDirection("down")
        }
      } else if (y + window.innerHeight < document.body.scrollHeight) {
        if (scrollDirection !== "up") {
          setScrollDirection("up")
        }
      }
      setPrevY(y)
    }, 100),
    [
      isMounted,
      prevY,
      setPrevY,
      scrollDirection,
      setScrollDirection,
      document,
      window,
    ]
  )

  useEventListener("scroll", scrollHandler)

  return (
    <NavbarContainer scrollDirection={scrollDirection}>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition classNames="fadedown" timeout={3000}>
            <LogoLink to="/">
              <Logo>Tutoro</Logo>
            </LogoLink>
          </CSSTransition>
        )}
      </TransitionGroup>

      <NavbarList>
        <TransitionGroup>
          {isMounted &&
            navbarLinks &&
            navbarLinks.map(({ url, name }, i) => (
              <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                <NavbarListItem
                  style={{ transitionDelay: `${(i + 1) * 200}ms` }}
                >
                  <NavbarLink to={url}>{name}</NavbarLink>
                </NavbarListItem>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </NavbarList>
    </NavbarContainer>
  )
}

export default Navbar
