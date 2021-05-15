import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.accent} !important;
  }

  .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.colors.accent} !important;
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.accent} !important;
  }

  body {
    font-size: 1.7rem;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.primaryLightBg};
  }
`

export default GlobalStyle
