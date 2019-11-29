import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledAbout id='About'>
    <h1 className='section-title'>¿Por qué elegirnos?</h1>
    <h2>Somos fabricantes</h2>
    <p>Disponemos de nuestro <b>taller de fabricación</b> para la elaboración e instalación de tu sueño ideal</p>

    <h2>Diseño</h2>
    <p>Nos identificamos con <b>arte y estilo</b> para crear acordes a tus gustos y tendencia con <b>diseño moderno</b> y practico para ti.</p>

    <h2>Calidad</h2>
    <p>Ofrecemos <b>materiales de máxima calidad</b> y con los mejores acabados acorde a lo que buscas</p>

    <h2>Servicio</h2>
    <p>Fabricamos según las necesidades de nuestro clientes y buscamos junto a ti el <b>asesoramiento</b> para la mejor opcion de <b>arte y diseño</b></p>
  </StyledAbout>
)

const StyledAbout = styled.section`
  background: linear-gradient(to right, #fff, ${props => props.theme.bgColor});
  color: ${props => props.theme.primaryColor};
  z-index: 20;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8rem;
  }
`;
