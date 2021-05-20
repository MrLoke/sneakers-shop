import styled from 'styled-components/macro'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  position: relative;
  z-index: 1;
  margin-bottom: 5rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
    width: 100%;
    height: 60vh;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.primaryLightBg};
`

export const HeaderContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  margin: 0 auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDarkBg};
`

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.lightText};
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.size.m};
`
