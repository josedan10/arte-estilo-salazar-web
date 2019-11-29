import React from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { withTheme } from 'styled-components'

import config from '../../config'

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  adaptativeHeight: true
}
export default withTheme ((props) => (
  <StyledSection id="Testimonials" className="testimonials">
    <h1 className='section-title'>En ellos dejamos nuestro legado</h1>
    <Slider {...settings}>
      {
        config.testimonials.map((testimonial, ind) => (
          <div>
            <div className="testimonial" key={'testimonial-' + ind}>
              <picture>
                <img src={testimonial.picture} alt={`Testimonial ${testimonial.name} Arte y Estilo Salazar`} />  
              </picture>

              <ContentWrapper>
                <h2 className='name'>{testimonial.name}</h2>
                <span className='title'>{testimonial.title}</span>
                <p className='content'>{testimonial.testimonial}</p>

                <SocialWrapper>
                  { testimonial.socialLinks &&
                    testimonial.socialLinks.map(social => (
                      <a href={social.url} key={social.name + testimonial.name}>
                        <FontAwesomeIcon icon={['fab', social.name]} size='lg' color={props.theme.secondaryColor}/>
                      </a>
                    ))
                  }
                </SocialWrapper>

              </ContentWrapper>
            </div>
          </div>
        ))
      }
    </Slider>
  </StyledSection>
))

const SocialWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  
  a {
    float: right;
    margin: 0 5px;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  margin-left: 10px;
  height: 100%;
`

const StyledSection = styled.section`
  .section-title {
    color: ${props => props.theme.primaryColor};
  }

  .testimonial {
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    display: flex !important;
    align-items: center;
    padding: 1rem;
    height: 250px;
    border-radius: 10px;
    border: 4px solid ${props => props.theme.secondaryColor};
    margin: 0 20px;

    box-shadow: 12px 12px 10px #444;

    picture {
      img {
        width: 100%;
        border-radius: 50%;
        width: 150px;
        height: 150px;
      }
    }

    .name {
      text-decoration: underline;
      margin-bottom: 5px;
    }

    .title {
      font-size: 0.8rem;
      font-variant: cursive;
    }

    .content {
      margin-top: 20px;
      padding-right: 10px;
    }
  }
`
