import { slide as Menu } from 'react-burger-menu'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { MenuWrapper,MenuContainer, MenuList, ListItem } from './MobileMenuStyled'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '15px',
    top: '15px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#111',
    height: '25px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#eee',
    padding: '0 2rem',
    fontSize: '2rem',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#111',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.6)',
  },
}

const MobileMenu = () => {
  return (
    <MenuWrapper>
      <Menu
        styles={styles}
        customBurgerIcon={<AiOutlineMenu size='2.5rem' color='#eee' />}>
        <MenuContainer>
          <MenuList>
            <ListItem>
              <Link to='/#'>Brands</Link>
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
        </MenuContainer>
      </Menu>
    </MenuWrapper>
  )
}

export default MobileMenu
