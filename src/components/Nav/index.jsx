import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const sections = [
  '',
  'About',
  'Portfolio',
  'Testimonials',
  'Contact'
]

export default () => {
  return (
    <StyledNav>
      <ul>
        { sections.map((section, index) => (
          <li key={`${section}-${index}`}><a href={`#${section}`}>{section || 'Home'}</a></li>
        )) }
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.primary};

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${props => props.theme.secondary};
      text-decoration: none;
    }
  }
`
