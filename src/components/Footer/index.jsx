import React from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";
import { Flex, Box } from "rebass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
  faPinterestP
} from "@fortawesome/free-brands-svg-icons";

// const sections = [
//   {
//     name: "Inicio",
//     url: "inicio"
//   },
//   {
//     name: "Tu mejor elección",
//     url: "por-que-elegirnos"
//   },
//   {
//     name: "Portafolio",
//     url: "portafolio"
//   },
//   {
//     name: "Clientes",
//     url: "testimonios"
//   },
//   {
//     name: "Contacto",
//     url: "contacto"
//   }
// ];

const socials = [
  {
    name: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=584242473176",
    icon: faWhatsapp,
    username: "+584242473176"
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/carpinteriarteyestilo",
    icon: faFacebookF,
    username: "Arte y Estilo Salazar"
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/carpinteriaarteyestilo",
    icon: faInstagram,
    username: "@carpinteriaarteyestilo"
  },
  {
    name: "telegram",
    url: "https://t.me/arteyestiloSalazar",
    icon: faTelegramPlane,
    username: "+584242473176"
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/carparteyestilo",
    icon: faTwitter,
    username: "@carparteyestilo"
  },
  {
    name: "pinterest",
    url: "https://www.pinterest.com/carpinteriaarteyestilo",
    icon: faPinterestP,
    username: "@carpinteriarteyestilo"
  }
];

export default props => (
  <StyledFooter>
    <Flex className="footer-container" flexWrap="wrap" justifyContent="space-between">
      <Box className="branding" width={[1, 3 / 8]} >
        <img
          src="images/logo-neg.svg"
          alt="Logo Arte y Estilo Salazar Negativo"
        />
        <p>
          <i>Nuestro legado es su satisfacción</i>
        </p>
        <p>J-50013846-6</p>
      </Box>
      {/* <Box className="nav" width={[1, 1 / 2]} px={3}>
        {sections.map((section, index) => (
          <Link
            key={section.name + section.url + index}
            to={section.url}
            smooth={true}
            offset={50}
            duration={500}
          >
            {section.name}
          </Link>
        ))}
      </Box> */}
      <Box className="social" width={[1, 3 / 8 ]} px={3}>
        {socials.map(social => (
          <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
            <span className='name'>{social.username}{" "}</span>
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
  font-size: 1.3rem;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 1250px) {
    font-size: 1rem;
  }

  .branding {
    padding-left: 5rem;

    @media (max-width: 640px) {
      width: 100%;
      order: 2;
      margin-top: 4rem;
      padding: 0;
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
    align-items: flex-end;
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
    @media (max-width: 640px) {
      width: 100%;
      flex-direction: row;
      // flex-wrap: wrap;
      // justify-content: flex-start;

      
      a {
        margin: 10px 0;
        display: flex;
        
        .name {
          display: none;
        }

        .icon {
          font-size: 2.5rem;
        }

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
