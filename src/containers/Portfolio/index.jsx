import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "../../config";

import Modal from '../../components/Modal'

function LeftArrowIcon (props) {
  const {style, onClick} = props;

  return (
    <button
      className='slider-arrow left'
      style={{...style, outline: 'none'}}
      onClick={onClick}
    >
      <FontAwesomeIcon
          icon="chevron-left"
          size="2x"
      />
    </button>
  )
}

function RightArrowIcon (props) {
  const {style, onClick} = props;

  return (
    <button
      className='slider-arrow right'
      style={{...style, outline: 'none'}}
      onClick={onClick}
    >
      <FontAwesomeIcon
          icon="chevron-right"
          size="2x"
      />
    </button>
  )
}

function customPaging (i) {
  return (
    <div
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'rgb(88, 15, 17)'
      }}
    />
  )
}

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
        autoplay: false,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand',
        // adaptativeHeight: true,
        // centerMode: true,
        prevArrow: <LeftArrowIcon />,
        nextArrow: <RightArrowIcon />,
        centerPadding: "40px",
        customPaging
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
    this.slider.slickPlay();
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
  }

  setActiveWork (work) {
    this.setState(prevState => ({
      ...prevState,
      activeWork: work,
      showModal: true
    }))
    this.slider.slickPause();
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
  }

  UNSAFE_componentWillMount() {}

  render() {

    let {
      hideModal,
      state: { activeWork, showModal }
    } = this

    return (
      <StyledPortfolio id="portafolio" className="portfolio">
        <div className="container wow fadeInRight" >
          <h1 className="section-title">Algunos de nuestros trabajos</h1>
            {this.state.works ? (
              <Slider {...this.state.slickSettings} ref={slider => (this.slider = slider)}>
                {this.state.works.map((work, ind) => (
                  <div onClick={() => this.setActiveWork(work)} key={`${work.title}`} className="img-container">
                    <div style={{backgroundImage: `url(${work.images[0]})`}}  className="preview">
                      <FontAwesomeIcon
                        className="icon"
                        icon="eye"
                        size="2x"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              "No exists works yet"
            )}

          <Modal hideModal={hideModal} showModal={showModal} work={activeWork} />
        </div>
      </StyledPortfolio>
    );
  }
}

const StyledPortfolio = styled.section`
  background-image: url("images/wood-texture.jpg");
  background-size: cover;

  .section-title {
    text-align: right;
    color: ${props => props.theme.primaryColor};
  }

  .img-container {
    position: relative;
    width: 100%;
    height: 80vh;
    border: solid 5px ${props => props.theme.primaryColor};
    border-radius: 5px;
    
    .preview {
      position: relative;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center; 
      
      .icon {
        position: absolute;
        bottom: 5%;
        right: 5%;
        color: ${props => props.theme.primaryColor};
        z-index: 2;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
