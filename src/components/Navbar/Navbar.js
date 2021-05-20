import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'features/userSlice'
import { BiUser } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import {
  Nav,
  AppHeader,
  Menu,
  MenuList,
  ListItem,
  UserActions,
  UserContainer,
  DropdownContent,
  DropdownList,
  DropdownItem,
  UserTab,
  UserInfo,
  LogoutBtn,
} from './NavbarStyled'
import LoginForm from 'components/LoginForm/LoginForm'

const Navbar = () => {
  const [openUserPanel, setOpenUserPanel] = useState(false)
  const [isDropdown, setIsDropdown] = useState(false)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <Nav>
      <AppHeader>
        <Link to='/'>SNEAKER WORLD</Link>
      </AppHeader>
      <Menu>
        <MenuList>
          <ListItem dropdown onClick={() => setIsDropdown(!isDropdown)}>
            <Link to='/#'>Brands</Link>
            <RiArrowDropDownLine
              size='3rem'
              color='#ddd'
              style={{ marginBottom: '0.5rem' }}
            />
            <DropdownContent isDropdown={isDropdown}>
              <DropdownList>
                <DropdownItem>Nike</DropdownItem>
                <DropdownItem>Adidas</DropdownItem>
                <DropdownItem>Puma</DropdownItem>
                <DropdownItem>New Balance</DropdownItem>
                <DropdownItem>Converse</DropdownItem>
                <DropdownItem>Vans</DropdownItem>
              </DropdownList>
            </DropdownContent>
          </ListItem>
          <ListItem>
            <Link to='/#'>Shoes</Link>
          </ListItem>
          <ListItem>
            <Link to='/#'>Accesories</Link>
          </ListItem>
          <ListItem>
            <Link to='/#'>Sales</Link>
          </ListItem>
          <ListItem>
            <Link to='/#'>Contact</Link>
          </ListItem>
        </MenuList>
      </Menu>
      <UserActions>
        <UserContainer onClick={() => setOpenUserPanel(!openUserPanel)}>
          <BiUser size='3rem' color='#eee' />
        </UserContainer>
        {user.isLogged ? (
          <UserTab openUserPanel={openUserPanel} isUserLogged>
            <UserInfo>Profile</UserInfo>
            <UserInfo>{user.userInfo.displayName}</UserInfo>
            <UserInfo>{user.userInfo.email}</UserInfo>
            <LogoutBtn onClick={() => dispatch(logout())}>Logout</LogoutBtn>
          </UserTab>
        ) : (
          <UserTab openUserPanel={openUserPanel}>
            <LoginForm />
          </UserTab>
        )}
      </UserActions>
    </Nav>
  )
}

export default Navbar
