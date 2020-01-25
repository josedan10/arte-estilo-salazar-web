import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
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
    url: "/#",
    icon: faHome
  },
  {
    name: "Acerca de Nosotros",
    url: "/#About",
    icon: faUserTie
  },
  {
    name: "Portafolio",
    url: "/#Portfolio",
    icon: faBriefcase
  },
  {
    name: "Clientes",
    url: "/#Testimonials",
    icon: faHandshake
  },
  {
    name: "Contacto",
    url: "/#Contact",
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
  const [activeSection, setActiveSection] = useState(null);

  window.addEventListener("scroll", () => {
    let about = document.getElementById("About");
    let contact = document.getElementById("Contact");
    let portfolio = document.getElementById("Portfolio");
    let clients = document.getElementById("Testimonials");

    if (window.pageYOffset < about.offsetTop) setActiveSection("inicio");
    else if (
      window.pageYOffset >= about.offsetTop &&
      window.pageYOffset < portfolio.offsetTop
    )
      setActiveSection("acerca de nosotros");
    else if (
      window.pageYOffset >= portfolio.offsetTop &&
      window.pageYOffset < clients.offsetTop
    )
      setActiveSection("portafolio");
    else if (
      window.pageYOffset >= clients.offsetTop &&
      window.pageYOffset < contact.offsetTop
    )
      setActiveSection("clientes");
    else setActiveSection("contacto");
  });

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
          src="/images/logo.png"
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
            <a
              onClick={e => setHidden(true)}
              onMouseEnter={e => setHidden(false)}
              href={`${section.url}`}
              className={
                activeSection === section.name.toLowerCase() ? "active" : ""
              }
            >
              {section.name}{" "}
              <FontAwesomeIcon className="icon" icon={section.icon} size="lg" />
            </a>
          </li>
        ))}
      </ul>

      <StyledSocial onMouseEnter={e => setHidden(false)}>
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
  width: 260px;
  transition: all 0.5s ease;
  z-index: 800;
  transform: translate(0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    width: 250px;
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
      width: 75%;
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
      padding: 1rem 2rem;
      padding-right: 7px;
      text-align: right;
      transition: all 0.3s ease;

      @media (max-width: 768px) {
        text-align: center;
      }

      .icon {
        margin-left: 15px;
      }

      &:hover,
      &.active {
        transition: all 0.3 ease;
        font-size: 20px;
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

  z-index: 950;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 30%;
  }
`;
