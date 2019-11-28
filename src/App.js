import React from 'react'
import { ThemeProvider } from 'styled-components'

import Nav from './components/Nav'
import theme from './theme'

import './assets/scss/index.scss'
import Home from './containers/Home'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Nav />
        <Home />

      </main>
    </ThemeProvider>
  )
}

export default App
