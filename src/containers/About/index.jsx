import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledAbout id='por-que-elegirnos'>
    <h1 className='section-title'>¿Por qué elegirnos?</h1>

    <StyledGrid className="grid-container">

      <StyledContainerFabricantes>

        <h2>Fabricación</h2>
        <div className="content">
          <p>
            Disponemos de nuestro <b>taller de fabricación</b> para la elaboración e instalación de tu <b>sueño ideal</b>, con acabados y detalles que se ajustan según tu personalidad de la mano de nuestro <b>equipo especializado en carpintería</b>.
          </p>
        </div>
      </StyledContainerFabricantes>

      <StyledContainerDesign>

        <h2>Diseño</h2>
        <div className="content">
          <p>Cada cosa en su lugar por eso nos identificamos con <b>arte y estilo</b> para crear acorde a tus gustos y tendencias con <b>diseños modernos y clásicos</b> para la <b>construcción o remodelación del interior de tu hogar</b>.</p>
        </div>
      </StyledContainerDesign>

      <StyledContainerQuality>

        <h2>Calidad</h2>
        <div className="content">
          <p>Nuestra función es crear <b>piezas y diseños de interiores</b> en lo cuales nuestros clientes se sientan en cómodos, que sean <b>sitios confortables y funcionales</b> con los materiales de <b>máxima calidad</b> y con los <b>mejores acabados</b> acorde a lo que buscas.</p>
        </div>
      </StyledContainerQuality>

      <StyledContainerService>

        <h2>Servicio</h2>
        <div className="content">
          <p>Sabemos que te gusta que cada detalle este <b>hecho perfectamente a tu medida</b>, por eso fabricamos según las necesidades de nuestro cliente y buscamos junto a ti el <b>asesoramiento de tus espacios</b> para una mejor opcion de <b>arte y diseño del interior de tu hogar</b>.</p>
        </div>
      </StyledContainerService>
    </StyledGrid>
  </StyledAbout>
)

const StyledAbout = styled.section`
  background: linear-gradient(to bottom right, #fff, ${props => props.theme.bgColor});
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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    .content {
      position: absolute;
      padding: 20px 100px;
      transition: all .5s .3s ease;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1110px) {
        padding: 10px 30px;
      }

      @media (max-width: 768px) {
        padding: 5px 20px;
      }
    }

    &:hover {
      h2 {
        opacity: 0;
        transition: opacity .5s ease;
      }

      .content {
        transform: translateX(0);
        transition: all .5s .2s ease;
      }
    }

    h2 {
      color: white;
      transition: opacity .5s .4s ease;
      margin: 0;
    }
  
  }
`;


const StyledContainerFabricantes = styled.div`
  grid-column: span 3;
  grid-row: span 2;
  height: 500px;

  @media (max-width: 768px) {
    grid-column: span 5;
    grid-row: span 1;
    height: 300px;
  }

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('/images/fabricantes-bg.jpg');

  .content {
    transform: translateX(100%);
    background: ${props => props.theme.primaryGradientBg};
    color: ${props => props.theme.secondaryColor};
  }
`;

const StyledContainerDesign = styled.div`
  grid-column: span 2;
  grid-row: span 2;

  @media (max-width: 768px) {
    grid-column: span 5;
    grid-row: span 1;
  }

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('/images/design-bg.jpg');

  .content {
    transform: translateY(100%);
    background: ${props => props.theme.secondaryGradientBg};
    color: ${props => props.theme.primaryColor};
  }
`;

const StyledContainerQuality = styled.div`
  grid-column: span 2;
  grid-row: span 2;

  @media (max-width: 768px) {
    grid-column: span 5;
    grid-row: span 1;
  }

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('/images/quality-bg.jpg');

  .content {
    transform: translateY(-100%);
    background: ${props => props.theme.secondaryGradientBg};
    color: ${props => props.theme.primaryColor};
  }
`;


const StyledContainerService = styled.div`
  grid-column: span 3;
  grid-row: span 2;

  @media (max-width: 768px) {
    grid-column: span 5;
    grid-row: span 1;
  }

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('/images/services-bg.jpg');

  .content {
    transform: translateX(-100%);
    background: ${props => props.theme.primaryGradientBg};
    color: ${props => props.theme.secondaryColor};
  }
`;