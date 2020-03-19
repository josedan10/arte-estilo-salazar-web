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

    transform: translateY(0);
    transition: all .5s ease;

    &.show {
        transform: translateY(100%);
        transition: all .5s ease;
    }

    .modal__bg {
        width: 100vw;
        height: 100vh;
        position: absolute;
    }

    .modal__content {        
        display: flex;
        margin: 2rem;
        width: calc(100vw - 6rem);
        height: calc(100vh - 6rem);
        background: white;
        justify-content: space-around;
        align-items: center;
        padding: 5rem 2rem;
        z-index: 5;

        .close-icon {
            position: absolute;
            color: ${props => props.theme.primaryColor};
            right: 5rem;
            top: 5rem;

            &:hover {
                cursor: pointer;
            }
        }

        .images-container {
            width: 50%;
        }

        &__description {
            margin: 0 1rem;

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