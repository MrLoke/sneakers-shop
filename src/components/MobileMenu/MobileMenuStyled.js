import styled from 'styled-components/macro'

export const MenuWrapper = styled.div`
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`

export const MenuContainer = styled.div`
  display: flex;
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListItem = styled.li`
  padding: 10px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkText};
  }
`
