import styled from 'styled-components/macro'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
  ${({ theme }) => theme.media.lg} {
    width: 80%;
    margin: 4rem auto;
  }
`

export const Slide = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 100%;
  max-width: 100%;
`

export const ImgSlide = styled.img`
  max-width: 100%;
  vertical-align: middle;
  /* height: auto; */
`
