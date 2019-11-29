import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHandshake, faEnvelope, faHome, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebookF, faInstagram, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'

const sections = [
  {
    name: 'Inicio',
    url: '/#',
    icon: faHome
  },
  {
    name: 'Sobre Nosotros',
    url: '/#About',
    icon: faUserTie
  },
  {
    name: 'Portafolio',
    url: '/#Portfolio',
    icon: faBriefcase
  },
  {
    name: 'Clientes',
    url: '/#Testimonials',
    icon: faHandshake
  },
  {
    name: 'Contacto',
    url: '/#Contact',
    icon: faEnvelope
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
    name: 'instagram',
    url: 'https://www.instagram.com',
    icon: faInstagram
  },
  {
    name: 'telegram',
    url: 'https://www.telegram.com',
    icon: faTelegramPlane
  },
  {
    name: 'twitter',
    url: 'https://www.twitter.com',
    icon: faTwitter
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
        <img className="logo" src="/images/logo.png" alt="Arte y Estilo Salazar logo"/>
      </picture>
      
      <ul>
        { sections.map((section, index) => (
          <li key={`${section}-${index}`}>
            <a 
              onMouseEnter={e => setHidden(false)}
              href={`${section.url}`}
            >
              {section.name} <FontAwesomeIcon className='icon' icon={section.icon} size="lg"/>
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
                  color={props.theme.primaryColor}
                  size="lg"
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
  background-color: ${props => props.theme.bgColor};
  box-sizing: border-box;
  width: 240px;
  transition: transform .5s ease;
  z-index: 800;
  transform: translate(0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 8px 15px ${props => props.theme.primaryColor};

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
    transform: translate(calc(2rem - 235px));
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
      color: ${props => props.theme.primaryColor};
      text-decoration: none;
      display: block;
      padding: 1rem 2rem;
      padding-right: 7px;
      text-align: right;
      transition: all .3s ease;

      .icon {
        margin-left: 10px;
      }

      &:hover {
        transition: all .3 ease;
        font-size: 20px;
        background-color: ${props => props.theme.linksColor};
        color: ${props => props.theme.secondaryColor};
      }
    }
  }
`

const StyledSocial = styled.div`
  padding: 2.1rem;
  display: flex;
  justify-content: space-between;

  z-index: 950;
`
