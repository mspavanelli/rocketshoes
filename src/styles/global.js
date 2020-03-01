import { createGlobalStyle } from 'styled-components'

import BackgroundHeader from '../assets/images/header-background.svg'

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #191920 url(${BackgroundHeader}) no-repeat top center;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
`

export default globalStyle
