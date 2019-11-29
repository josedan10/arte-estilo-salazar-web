import React from 'react'
import styled from 'styled-components'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from '../../config'

export default class Portfolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      activeWork: null,
      slickSettings: {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        adaptativeHeight: true
      },
      works: [...config.works]
    }
  }

  UNSAFE_componentWillMount () {
  }

  render () {

    return (
      <StyledPortfolio id="Portfolio" className="portfolio">
        <h1 className="section-title">Algunos de nuestros trabajos</h1>
        <SlickContainer>
          {
            this.state.works ? 
            <Slider {...this.state.slickSettings}>
              {
                this.state.works.map((work, ind) => (
                  <WorkContainer key={`${work.title}`}>
                    <a href="/#"
                      onClick={e => e.preventDefault()}
                    >
                      <picture><img src={work.images[0]} alt={work.title}/></picture>
                    </a>
                  </WorkContainer>
                ))
              }
            </Slider> : 'No exists works yet'
          }
        </SlickContainer>
      </StyledPortfolio>
    )
  }
}

const StyledPortfolio = styled.section`
  background-image: url('/images/wood-texture.jpg');
  background-size: cover;

  .section-title {
    text-align: right;
    color: ${props => props.theme.primaryColor};
  }
`

const SlickContainer = styled.div`
  min-height: 30vh;
`

const WorkContainer = styled.div`
  img {
    box-shadow: 8px 8px 20px ${props => props.theme.primaryColor};
  }
`
