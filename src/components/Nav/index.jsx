import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHandshake,
  faEnvelope,
  faHome,
  faUserTie,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const sections = [
  {
    name: "Inicio",
    url: "inicio",
    icon: faHome
  },
  {
    name: "Tu mejor elección",
    url: "por-que-elegirnos",
    icon: faUserTie
  },
  {
    name: "Portafolio",
    url: "portafolio",
    icon: faBriefcase
  },
  {
    name: "Clientes",
    url: "testimonios",
    icon: faHandshake
  },
  {
    name: "Contacto",
    url: "contacto",
    icon: faEnvelope
  }
];

const socials = [
  {
    name: "whatsapp",
    url: "https://wa.me/584122308065",
    icon: faWhatsapp
  },
  {
    name: "facebook",
    url: "https://www.facebook.com",
    icon: faFacebookF
  },
  {
    name: "instagram",
    url: "https://www.instagram.com",
    icon: faInstagram
  },
  {
    name: "telegram",
    url: "https://www.telegram.com",
    icon: faTelegramPlane
  },
  {
    name: "twitter",
    url: "https://www.twitter.com",
    icon: faTwitter
  }
];

export default withTheme(props => {
  const [isHidden, setHidden] = useState(true);
  return (
    <StyledNav
      className={isHidden && "hide"}
      onMouseEnter={e => setHidden(false)}
      onMouseLeave={e => setHidden(true)}
    >
      <div
        className="eventPanel"
        onMouseEnter={e => setHidden(false)}
        onMouseLeave={e => setHidden(true)}
      />
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/icon.png"></source>
        <img
          className="logo"
          src="images/logo.png"
          alt="Arte y Estilo Salazar logo"
        />
      </picture>

      <a
        href="/#"
        onClick={e => {
          e.preventDefault();
          setHidden(!isHidden);
        }}
        className="toggle-icon"
      >
        <FontAwesomeIcon
          color={props.theme.primaryColor}
          icon={isHidden ? faBars : faTimes}
          size="2x"
        ></FontAwesomeIcon>
      </a>

      <ul className="page-nav">
        {sections.map((section, index) => (
          <li key={`${section}-${index}`}>
            <Link
              onClick={e => setHidden(true)}
              onMouseEnter={e => setHidden(false)}
              to={section.url}
              smooth={true}
              offset={50}
              duration={500}
              spy={true}
            >
              {section.name}{" "}
              <FontAwesomeIcon className="icon" icon={section.icon} size="lg" />
            </Link>
          </li>
        ))}
      </ul>

      <StyledSocial className="social" onMouseEnter={e => setHidden(false)}>
        {socials.map((account, idx) => {
          return (
            <a
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx + account.name}
              onMouseEnter={e => setHidden(false)}
            >
              <FontAwesomeIcon
                icon={account.icon}
                color={props.theme.primaryColor}
                size="lg"
              />
            </a>
          );
        })}
      </StyledSocial>
    </StyledNav>
  );
});

const StyledNav = styled.nav`
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.bgColor};
  box-sizing: border-box;
  width: 280px;
  transition: all 0.5s ease;
  z-index: 800;
  transform: translate(0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  box-shadow: 0 8px 15px ${props => props.theme.primaryColor};

  @media (max-width: 768px) {
    // top bar
    height: 100vh;
    width: 100vw;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .toggle-icon {
    display: none;
    position: absolute;
    right: 1rem;
    top: 25px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .eventPanel {
    width: 280px;
    position: fixed;
    height: 100vh;
    z-index: 850;
    left: 0;
    top: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  picture {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    tralign-items: flex-start;

    @media (max-width: 768px) {
      width: auto;
    }

    .logo {
      width: 142px;
      margin: 1rem auto;

      @media (max-width: 768px) {
        width: auto;
        height: 50px;
        margin: 0;
      }
    }
  }

  &.hide {
    transform: translate(calc(2rem - 250px));
    transition: all 0.5s ease;

    & .social {
      opacity: 0;
      transition: all 0.5s ease;
    }

    @media (max-width: 768px) {
      transform: translate(0);
      height: 80px;
      transition: all 0.9s ease;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
    width: 100%;
    z-index: 950;

    @media (max-width: 768px) {
      align-items: center;
    }

    li,
    a {
      width: 100%;
    }

    a {
      color: ${props => props.theme.primaryColor};
      text-decoration: none;
      display: block;
      padding: 1rem 1.5rem;
      padding-right: 20px;
      text-align: right;
      transition: all 0.3s ease;

      @media (max-width: 768px) {
        text-align: center;
      }

      .icon {
        margin-left: 20px;
      }

      &:hover,
      &.active {
        transition: all 0.3 ease;
        background-color: ${props => props.theme.linksColor};
        color: ${props => props.theme.secondaryColor};
      }
    }
  }
`;

const StyledSocial = styled.div`
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease;
  opacity: 1;

  z-index: 950;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 30%;
  }
`;
