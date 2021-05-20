import styled from 'styled-components/macro'

export const Container = styled.div`
  padding: 5rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  border: 1px solid #eee;
  ${({ theme }) => theme.media.md} {
    width: 50%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 25%;
  }
`

export const ItemTitle = styled.p`
  padding-top: 2rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.size.s};
`

export const ItemDesc = styled.p`
  padding-top: 2rem;
  text-align: center;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.colors.darkText};
`

export const HeaderContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  margin: 2rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
`

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.darkText};
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.size.m};
`
