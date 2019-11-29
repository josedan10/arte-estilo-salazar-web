import React from 'react'
import styled from 'styled-components';


export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <StyledHome className="home" id="Home">
        <img src="/images/home-bg.jpg" alt="Hermanos Salazar"/>
        <h1 className="grand-title">Nuestro legado es su satisfacción</h1>
        <div className="content">
          <p>Hacemos realidad el espacio de tus sueños, porque nuestro servicio es tan grande como tu imaginacion.</p>
          <p>Animate al cambio de tu hogar <b>¡Contáctanos!</b></p>

          <StyledLink href="/#Contact">Solicita tu presupuesto</StyledLink>
        </div>
      </StyledHome>
    )
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

  transition: all .3s ease;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
    transition: all .3s ease;
  }
`

const StyledHome = styled.section`
  // background: linear-gradient(to right, #fff, ${props => props.theme.bgColor});
  // margin-left: 2rem;
  min-height: 700px;
  overflow: hidden;

  img {
    margin: 0 auto;
    margin-top: -100px;
    margin-left: -120px;
    width: 100%;
    // max-width: 1000px;
    position: absolute;
    filter: brightness(35%);
    z-index: -1;
  }

  .grand-title {
    position: absolute;
    color: ${props => props.theme.secondaryColor};
    font-size: 3rem;
    font-weight: 500;
    max-width: 400px;
    right: 150px;
    top: 30%;
  }

  .content {
    position: absolute;
    top: calc(30% + 150px);
    right: 150px;
    max-width: 400px;
    font-weight: 500;
    color: ${props => props.theme.secondaryColor};
    
  }
`;
