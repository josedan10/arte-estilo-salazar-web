import React from 'react'
import { ThemeProvider } from 'styled-components'

import Nav from './components/Nav'
import theme from './theme'

import './assets/scss/index.scss'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Nav />

      </main>
    </ThemeProvider>
  )
}

export default App
