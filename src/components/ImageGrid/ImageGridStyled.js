import styled from 'styled-components/macro'

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0.5rem;
  margin-bottom: 5rem;
`

export const Column = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 0.5rem;
  @media screen and (max-width: 850px) {
    flex: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`

export const Img = styled.img`
  margin-top: 1rem;
  vertical-align: middle;
  width: 100%;
`

export const HeaderContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  margin: 2rem auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDarkBg};
`

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.lightText};
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.size.m};
`