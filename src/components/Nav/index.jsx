import React, { useState } from 'react'
import styled from 'styled-components'

const sections = [
  '',
  'About',
  'Portfolio',
  'Testimonials',
  'Contact'
]

export default () => {
  const [isHidden, setHidden] = useState(true)
  return (
    <StyledNav className={isHidden && 'hide'}
    >
      <div className="eventPanel"
        onMouseEnter={e => setHidden(false)}
        onMouseLeave={e => setHidden(true)} 
      />
      <picture>
        <img className="logo" src="logo.png" alt="Arte y Estilo Salazar logo"/>
      </picture>
      
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
  background-color: ${props => props.theme.primaryColor};
  box-sizing: border-box;
  width: 200px;
  transition: transform .5s ease;
  z-index: 800;
  transform: translate(0);

  .eventPanel {
    width: 200px;
    position: fixed;
    height: 100vh;
    z-index: 850;
    left: 0;
    top: 0;
  }

  picture {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .logo {
      width: 80%;
      margin: 1rem auto;
    }
  }

  &.hide {
    transform: translate(calc(2rem - 200px));
    transition: transform .5s ease;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
    width: 100%;
    z-index: 950;

    li, a {
      width: 100%;
    }

    a {
      color: ${props => props.theme.secondaryColor};
      text-decoration: none;
      display: block;
      padding: 1rem 2rem;
      text-align: right;

      &:hover {
        background-color: ${props => props.theme.linksColor};
      }
    }
  }
`
