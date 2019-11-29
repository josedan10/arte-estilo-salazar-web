import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const sections = [
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'Sobre Nosotros',
    link: '#About'
  },
  {
    name: 'Portafolio',
    link: '#Portfolio'
  },
  {
    name: 'Testimonios',
    link: '#Testimonials'
  },
  {
    name: 'Contacto',
    link: '#Contact'
  }
]

const socials = [
  {
    name: 'whatsapp',
    url: 'https://wa.me/584122308065',
    icon: faWhatsapp
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com',
    icon: faFacebookF
  },
  {
    name: 'facebook',
    url: 'https://www.instagram.com',
    icon: faInstagram
  },
]

export default withTheme ((props) => {
  const [isHidden, setHidden] = useState(true)
  return (
    <StyledNav className={isHidden && 'hide'}
      onMouseEnter={e => setHidden(false)}
      onMouseLeave={e => setHidden(true)} 
    >
      <div className="eventPanel"
        onMouseEnter={e => setHidden(false)}
        onMouseLeave={e => setHidden(true)} 
      />
      <picture>
        <img className="logo" src="/images/logo-neg.svg" alt="Arte y Estilo Salazar logo"/>
      </picture>
      
      <ul>
        { sections.map((section, index) => (
          <li key={`${section}-${index}`}>
            <a 
              onMouseEnter={e => setHidden(false)}
              href={`${section.url}`}
            >
              {section.name}
            </a>
          </li>
        )) }
      </ul>

      <StyledSocial
        onMouseEnter={e => setHidden(false)}
      >
        {
          socials.map((account, idx) => {
            return (
              <a
                href={account.url}
                target='_blank'
                rel='noopener noreferrer'
                key={idx + account.name}
                onMouseEnter={e => setHidden(false)}
              >
                <FontAwesomeIcon
                  icon={account.icon}
                  color={props.theme.secondaryColor}
                  size="2x"
                />
              </a>
            )
          })
        }
      </StyledSocial>
    </StyledNav>
  )
})

const StyledNav = styled.nav`
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.primaryColor};
  box-sizing: border-box;
  width: 220px;
  transition: transform .5s ease;
  z-index: 800;
  transform: translate(0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    transform: translate(calc(2rem - 220px));
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
      transition: all .3s ease;

      &:hover {
        transition: all .3 ease;
        font-size: 20px;
        background-color: ${props => props.theme.linksColor};
      }
    }
  }
`

const StyledSocial = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  z-index: 950;
`
