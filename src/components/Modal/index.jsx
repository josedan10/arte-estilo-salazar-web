import React from 'react'
import styled from 'styled-components'
import Slick from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    centerPadding: "40px",
}

export default (props) => {
    return (
        <StyledModal className={`modal ${props.showModal && 'show'}`}>
            <div className="modal__bg" onClick={props.hideModal}></div>
            {
                props.work && (
                    <div className="modal__content">
                        <button onClick={props.hideModal}>
                            <FontAwesomeIcon
                                icon="times"
                                className="close-icon"
                                size="2x"
                            />
                        </button>
                        <div className="images-container">
                            <Slick
                                {...settings}
                            >
                                {props.work.images.map((image, ind) => (
                                    <img src={image} alt="Proyecto de Arte y Estilo Salazar" key={image + ind}/>
                                ))}
                            </Slick>
                        </div>
                        <div className="modal__content__description">
                            <h2 className="title">{props.work.title}</h2>
                            <div className="content" dangerouslySetInnerHTML={{__html: props.work.description}}></div>
                        </div>
                    </div>
                )
            }            
            {console.log(props.work)}
        </StyledModal>
    )
}

const StyledModal = styled.div`
    position: fixed;
    top: -100%;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    height: 100vh;
    width: 100vw;
    z-index: 500;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    transform: translateY(0);
    transition: all .5s ease;

    &.show {
        transform: translateY(100%);
        transition: all .5s ease;
        opacity: 1;
    }

    .modal__bg {
        width: 100vw;
        height: 100vh;
        position: absolute;
    }

    .modal__content {        
        display: flex;
        flex-wrap: wrap;
        width: calc(100vw - 6rem);
        height: calc(100vh - 6rem);
        background: white;
        justify-content: space-around;
        align-items: center;
        padding: 5rem 2rem;
        z-index: 5;
        overflow: hidden;

        @media (max-width: 768px) {
            overflow: auto;
            width: 100vw;
            height: 100vh;
            padding: 2rem;
        }

        .close-icon {
            position: absolute;
            color: ${props => props.theme.primaryColor};
            right: 5rem;
            top: 5rem;
            z-index: 2;

            &:hover {
                cursor: pointer;
            }

            @media (max-width: 768px) {
                right: 1rem;
                top: 1rem;
            }
        }

        .images-container {
            width: 48%;

            @media (max-width: 768px) {
                width: 100%;
                margin-bottom: 2rem;
            }
        }

        &__description {
            padding: 0 1rem;
            width: 48%;
            overflow: auto;
            height: 100%;

            @media (max-width: 768px) {
                width: 100%;
                height: auto;
            }

            .title {
                font-weight: 500;
                font-size: 2rem;
                margin-bottom: 1rem;
                color: ${props => props.theme.primaryColor};
            }

            .content {
                text-align: justify;

                p {
                    margin-bottom: 1rem;
                    line-height: 1.5;
    
                    &:last-child {
                        margin: 0;
                    }
                }
            }

        }
    }
`;