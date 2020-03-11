import React from "react";
import styled from "styled-components";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "../../config";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
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
        // adaptativeHeight: true,
        // centerMode: true,
        centerPadding: "40px"
      },
      works: [...config.works]
    };

    this.setActiveWork = this.setActiveWork.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal () {
    this.setState(prevState => ({
      ...prevState,
      showModal: false,
      activeWork: null
    }));
  }

  setActiveWork (work) {
    this.setState(prevState => ({
      ...prevState,
      activeWork: work,
      showModal: true
    }))
  }

  UNSAFE_componentWillMount() {}

  render() {

    let {
      showModal,
      hideModal,
      activeWork
    } = this.state

    return (
      <StyledPortfolio id="portafolio" className="portfolio">
        <h1 className="section-title">Algunos de nuestros trabajos</h1>
          {this.state.works ? (
            <Slider {...this.state.slickSettings}>
              {this.state.works.map((work, ind) => (
                <img onClick={() => this.setActiveWork(work)} key={`${work.title}`} src={work.images[0]} alt={work.title} />
              ))}
            </Slider>
          ) : (
            "No exists works yet"
          )}
      </StyledPortfolio>
    );
  }
}

const StyledPortfolio = styled.section`
  background-image: url("/images/wood-texture.jpg");
  background-size: cover;

  .section-title {
    text-align: right;
    color: ${props => props.theme.primaryColor};
  }
`;
