import React from 'react'
import { ThemeProvider } from 'styled-components'

import Nav from './components/Nav'
import WhatsappWidget from './components/WhatsappWidget'
import theme from './theme'

import './assets/scss/index.scss'
import Home from './containers/Home'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Testimonials from './containers/Testimonials'
import Contact from './containers/Contact'
import Footer from './components/Footer'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <main id="app">
        <Nav />
        <Home />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsappWidget />
      </main>
    </ThemeProvider>
  )
}

export default App
