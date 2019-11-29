import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <section className="home" style={{
        background: 'black',
        marginLeft: '2rem',
        height: '100vh',
        maxHeight: '700px',
      }}></section>
    )
  }
}
