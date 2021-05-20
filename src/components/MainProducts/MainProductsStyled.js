import styled from 'styled-components/macro'

export const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

export const HeaderContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  margin: 2rem auto;
  max-width: 1024px;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
  box-shadow: 0 9px 10px -11px #999;
`

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.darkText};
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.size.m};
`

export const ShowMoreBtn = styled.button`
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.utils.mediumRadius};
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.size.s};
  font-family: 'Roboto', sans-serif;
  &:hover {
    transform: scale(1.05);
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.lightText};
  }
`
