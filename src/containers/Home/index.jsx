import React from "react";
import styled from "styled-components";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledHome className="home" id="Home">
        <img src="/images/home-bg.jpg" alt="Hermanos Salazar" />
        <h1 className="grand-title">Nuestro legado es su satisfacción</h1>
        <div className="content">
          <p>
            Hacemos realidad el espacio de tus sueños, porque nuestro servicio
            es tan grande como tu imaginacion.
          </p>
          <p>
            Animate al cambio de tu hogar <b>¡Contáctanos!</b>
          </p>

          <StyledLink href="/#Contact">Solicita tu presupuesto</StyledLink>
        </div>
      </StyledHome>
    );
  }
}

const StyledLink = styled.a`
  background: transparent;
  border: solid 2px ${props => props.theme.secondaryColor};
  border-radius: 30px;
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;
  padding: 1rem 2rem;
  display: inline-block;
  margin-top: 20px;
  font-weight: 500;

  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.primaryColor};
  }
`;

const StyledHome = styled.section`
  // background: linear-gradient(to right, #fff, ${props =>
    props.theme.bgColor});
  // margin-left: 2rem;
  min-height: 700px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    min-height: 100vh;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    margin: 0 auto;
    margin-top: -100px;
    left: 0;
    width: 100%;
    position: absolute;
    filter: brightness(35%);
    z-index: -1;

    @media (max-width: 768px) {
      margin: 0;
      left: 0;
      top: 80px;
      width: 100%;
    }

    @media (max-width: 576px) {
      width: auto;
      height: 100%;
      left: -40%;
    }
  }

  .grand-title {
    position: absolute;
    color: ${props => props.theme.secondaryColor};
    font-size: 3rem;
    font-weight: 500;
    max-width: 400px;
    right: 150px;
    top: 25%;
    @media (max-width: 600px) {
      right: auto;
      text-align: center;
      top: auto;
      position: relative;
      width: 100%;
    }
  }

  .content {
    position: absolute;
    top: calc(25% + 150px);
    right: 150px;
    max-width: 400px;
    font-weight: 500;
    color: ${props => props.theme.secondaryColor};
    
    @media (max-width: 600px) {
      right: auto;
      text-align: center;
      top: auto;
      position: relative;
      width: 100%;
      margin-top: 25px;
    }
  }
`;
