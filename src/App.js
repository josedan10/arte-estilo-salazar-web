import React from 'react'
import { ThemeProvider } from 'styled-components'

import Nav from './components/Nav'
import theme from './theme'

import './assets/scss/index.scss'
import Home from './containers/Home'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Testimonials from './containers/Testimonials'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Nav />
        <Home />
        <About />
        <Portfolio />
        <Testimonials />
      </main>
    </ThemeProvider>
  )
}

export default App
