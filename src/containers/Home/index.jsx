import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="home" style={{
        background: 'black',
        width: 'calc(100vw - 2rem)',
        marginLeft: '2rem',
        height: '100vh',
        maxHeight: '700px',
      }}></div>
    )
  }
}
