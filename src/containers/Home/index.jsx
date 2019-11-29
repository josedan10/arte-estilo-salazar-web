import React from 'react'
import styled from 'styled-components';


export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <StyledHome className="home">
        <img src="/images/brothers.jpg" alt=""/>
      </StyledHome>
    )
  }
}

export const StyledHome = styled.section`
  background: black,
  margin-left: 2rem,
  height: 100vh,
  max-height: 700px,
`;
