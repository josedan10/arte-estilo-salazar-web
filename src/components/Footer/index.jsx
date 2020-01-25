import React from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    url: "/#"
  },
  {
    name: "Acerca de Nosotros",
    url: "/#About"
  },
  {
    name: "Portafolio",
    url: "/#Portfolio"
  },
  {
    name: "Clientes",
    url: "/#Testimonials"
  },
  {
    name: "Contacto",
    url: "/#Contact"
  }
];

const socials = [
  {
    name: "whatsapp",
    url: "https://wa.me/584122308065",
    icon: faWhatsapp,
    username: "04122308065"
  },
  {
    name: "facebook",
    url: "https://www.facebook.com",
    icon: faFacebookF,
    username: "Arte y Estilo Salazar"
  },
  {
    name: "instagram",
    url: "https://www.instagram.com",
    icon: faInstagram,
    username: "@arteestilo_salazar"
  },
  {
    name: "telegram",
    url: "https://www.telegram.com",
    icon: faTelegramPlane,
    username: "04122308065"
  },
  {
    name: "twitter",
    url: "https://www.twitter.com",
    icon: faTwitter,
    username: "@arteestilo_salazar"
  }
];

export default props => (
  <StyledFooter>
    <Flex flexWrap="wrap" justifyContent="space-between">
      <Box className="branding" width={[1, 1 / 3]} px={3}>
        <img
          src="/images/logo-neg.svg"
          alt="Logo Arte y Estilo Salazar Negativo"
        />
        <p>
          <i>Nuestro legado es su satisfacción</i>
        </p>
      </Box>
      <Box className="nav" width={[1, 1 / 3]} px={3}>
        {sections.map(section => (
          <a href={section.url} key={section.url + section.name}>
            {section.name}
          </a>
        ))}
      </Box>
      <Box className="social" width={[1, 1 / 3]} px={3}>
        {socials.map(social => (
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            {social.username}{" "}
            <FontAwesomeIcon className="icon" icon={social.icon} size="lg" />
          </a>
        ))}
      </Box>
    </Flex>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.primaryColor};
  padding: 2rem 4rem;
  color: ${props => props.theme.secondaryColor};

  .branding {
    @media (max-width: 576px) {
      width: 100%;
      order: 2;
      margin-top: 4rem;
    }

    img {
      width: 100%;
    }

    p {
      text-align: center;
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }

  a {
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
  }

  .nav,
  .social {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: right;
    text-align: right;

    .icon {
      margin-left: 10px;
    }
  }

  .nav {
    border-right: 2px solid ${props => props.theme.secondaryColor};

    @media (max-width: 768px) {
      display: none;
    }
  }

  .social {
    @media (max-width: 576px) {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;

      a {
        margin: 5px 0;
        display: flex;

        &:nth-child(odd) {
          margin-right: 5px;
          .icon {
            order: -1;
            margin-right: 10px;
          }
        }
      }
    }

    @media (max-width: 476px) {
      a {
        .icon {
          order: -1;
          margin-right: 10px;
        }
      }
    }
  }
`;
