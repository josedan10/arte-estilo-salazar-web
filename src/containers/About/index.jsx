import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledAbout id='About'>
    <h1 className='section-title'>¿Quienes somos?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ducimus maxime inventore doloribus molestiae quibusdam deserunt cupiditate consequatur, odit ab. Enim cupiditate ducimus fuga saepe laborum odit, exercitationem nesciunt ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci provident eveniet, exercitationem at architecto corrupti numquam doloribus. Similique nesciunt vitae nobis assumenda et asperiores repellendus? Amet maxime laborum eius iste?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem error laboriosam sunt rerum illo atque ullam magni deserunt odio. Odit dignissimos, quisquam sed laboriosam hic error nisi! Quos, sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci provident eveniet, exercitationem at architecto corrupti numquam doloribus. Similique nesciunt vitae nobis assumenda et asperiores repellendus? Amet maxime laborum eius iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem error laboriosam sunt rerum illo atque ullam magni deserunt odio. Odit dignissimos, quisquam sed laboriosam hic error nisi! Quos, sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem error laboriosam sunt rerum illo atque ullam magni deserunt odio. Odit dignissimos, quisquam sed laboriosam hic error nisi! Quos, sit.</p>
  </StyledAbout>
)

const StyledAbout = styled.section`
  background: linear-gradient(to right, #fff, ${props => props.theme.bgColor});
  color: ${props => props.theme.primaryColor};

  p {
    margin-bottom: 1rem;
    line-height: 1.8rem;
  }
`;
