import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { withTheme } from "styled-components";

import config from "../../config";

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  adaptativeHeight: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};
export default withTheme(props => (
  <StyledSection id="testimonios" className="testimonials">
    <div className="container wow fadeInRight">
      <h1 className="section-title">En ellos dejamos nuestro legado</h1>
      <Slider {...settings}>
        {config.testimonials.map((testimonial, ind) => (
            <div key={"testimonial-" + ind} className="testimonial">
              <img
                src={testimonial.picture}
                alt={`Testimonial ${testimonial.name} Arte y Estilo Salazar`}
              />
              <h2 className="name">{testimonial.name}</h2>
              <span className="title">{testimonial.title}</span>
              <p className="content">
                {/* Max length: 150 chars */}
                {testimonial.testimonial}
              </p>

              <SocialWrapper>
                {testimonial.socialLinks &&
                  testimonial.socialLinks.map(social => (
                    <a href={social.url} key={social.name + testimonial.name}>
                      <FontAwesomeIcon
                        icon={["fab", social.name]}
                        size="lg"
                        color={props.theme.primaryColor}
                      />
                    </a>
                  ))}
              </SocialWrapper>
            </div>
        ))}
      </Slider>
    </div>
  </StyledSection>
));

const SocialWrapper = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: flex-end;

  a {
    margin: 0 5px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledSection = styled.section`
  background: linear-gradient(to right, #fff, ${props => props.theme.bgColor});

  .section-title {
    color: ${props => props.theme.primaryColor};
  }
  
  .slick-list {
    overflow-y: visible;
    padding: 50px 0;
  }

  .slick-slider {
    @media (max-width: 768px) {
      margin: 0 auto;
      max-width: 500px;
    }
  }

  .testimonial {
    background-color: transparent;
    color: ${props => props.theme.primaryColor};
    padding: 2rem;
    padding-bottom: 1rem;
    height: 300px;
    border-radius: 10px;
    border: 4px solid ${props => props.theme.primaryColor};
    margin: 0 20px;
    box-shadow: 0px 5px 5px #aeaeae;

    display: grid !important;
    grid-template-rows: repeat(9, 1fr) 1rem;
    grid-template-columns: repeat(2, 50px) 1fr;
    grid-gap: 10px 2rem;

    img {
      width: 100%;
      height: auto;
      max-height: 100%;
      border-radius: 50%;
      align-self: center;

      grid-column: span 2;
      grid-row: span 10;
    }

    .name {
      text-decoration: underline;
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 1.5rem;
    }

    .title {
      font-size: 0.8rem;
      font-variant: cursive;
      font-weight: 500;
      display: flex;
    }

    .content {
      margin-top: 20px;
      padding-right: 10px;
      grid-row: span 6;
      font-size: 1.1rem;
      color: #343536;
    }

    @media (max-width: 1600px) {
      .content {
        margin-top: 15px;
        font-size: 1rem;
      }
    }


    @media (max-width: 1160px) {
      grid-gap: 10px 1rem;

      img {
        grid-row: span 4;
        justify-self: center;
        height: 100%;
        width: auto;
      }

      .name {
        font-size: 1.3rem;
      }

      .content {
        grid-row: span 5;
        grid-column: span 3;
      }
    }

    @media (max-width: 1000px) {
      img {
        grid-row: span 3;
      }

      .content {
        grid-row: span 7;
      }
    }

    @media (max-width: 960px) {
      height: 400px;
      margin: 0 10px;
      grid-gap: 0;

      img {
        grid-column: span 4;
        grid-row: span 2;

        width: auto;
      }

      .content {
        grid-row: span 5;
        grid-column: span 3;
        text-align: justify;
        overflow-wrap: break-word;
      }

      .title,
      .name {
        grid-column: span 3;
        text-align: center;
        justify-self: center;
      }
    }

    @media (max-width: 920px) {
      img {
        grid-row: span 3;
      }

      .content {
        grid-row: span 4;
      }
    }

    @media (max-width: 768px) {
      height: 300px;
    }

    @media (max-width: 500px) {
      height: 400px;
    }
  }
`;
