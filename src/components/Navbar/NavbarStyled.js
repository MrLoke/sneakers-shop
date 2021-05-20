import styled, { css } from 'styled-components/macro'

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.primaryDarkBg};
  position: sticky;
  top: 0;
  left: 0;
  color: inherit;
  z-index: 999;
  ${({ theme }) => theme.media.md} {
    justify-content: space-around;
  }
`

export const AppHeader = styled.h1`
  text-decoration: line-through;
  margin-left: 3rem;
  font-size: ${({ theme }) => theme.size.s};
  a {
    text-decoration: none;
    color: #eee;
  }
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.size.m};
  }
`

export const Menu = styled.div`
  display: none;
  ${({ theme }) => theme.media.md} {
    display: flex;
  }
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`

export const ListItem = styled.li`
  padding: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    transition: all 0.2s linear;
    color: ${({ theme }) => theme.colors.lightText};
    text-decoration: none;
    background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 3px
      no-repeat;
    transition: 0.3s;
    padding-bottom: 0.5rem;
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.colors.accent};
      --d: 100%;
    }
  }

  ${({ dropdown }) =>
    dropdown &&
    css`
      position: relative;
    `}
`

export const DropdownContent = styled.div`
  position: absolute;
  top: 103%;
  left: -20%;
  display: ${({ isDropdown }) => (isDropdown ? 'flex' : 'none')};
  width: 250px;
  background-color: ${({ theme }) => theme.colors.secondaryLightBg};
  border: 1px solid #111;
`

export const DropdownList = styled.ul`
  list-style: none;
`

export const DropdownItem = styled.li`
  padding: 1rem 2rem;
  cursor: pointer;
`

export const UserActions = styled.div`
  display: flex;
  position: relative;
  margin-left: 2rem;
`

export const UserContainer = styled.div`
  cursor: pointer;
`

export const ShopCart = styled.div`
  cursor: pointer;
  position: relative;
`

export const UserTab = styled.div`
  display: ${({ openUserPanel }) => (openUserPanel ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 137%;
  right: -150%;
  width: 300px;
  background-color: #fff;
  ${({ isUserLogged }) =>
    isUserLogged &&
    css`
      padding: 2rem;
      border: 1px solid #111;
    `}
`

export const UserInfo = styled.p`
  padding: 0.5rem 0;
`

export const LogoutBtn = styled.button`
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  border: 1px solid #111;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primaryLightBg};
  color: ${({ theme }) => theme.colors.darkText};
`
