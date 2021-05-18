import styled from 'styled-components/macro'

export const GridLayout = styled.div`
  height: 100vh;
  width: 100%;
  /* position: relative;
  ${({ theme }) => theme.media.md} {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'sidebar navbar'
      'sidebar mainview';
    gap: 0px 0px;
  } */
`

export const Container = styled.main`
  /* height: calc(100vh - 60px); */
  background-color: ${({ theme }) => theme.primaryBg};
  display: flex;
  /* flex-direction: column; */
`

export const Container2 = styled.main`
  display: flex;
  flex-direction: column;
`

export const DiscoverHeading = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 1.5rem;
`

export const GridPlaylists = styled.div`
  color: ${({ theme }) => theme.primaryText};
  flex: 0.8;
  /* grid-area: mainview; */
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  gap: 1.5rem; */
  a {
    text-decoration: none;
  }
  display: block;
  width: 100%;
  overflow-x: scroll;
  padding: 20px;
  background-color: ${({ theme }) => theme.primaryBg};
  ::-webkit-scrollbar {
    height: 4px;
  }
`

export const Slider = styled.div`
  display: block;
  white-space: nowrap;
`
