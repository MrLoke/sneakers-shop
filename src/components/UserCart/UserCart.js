import { useEffect } from 'react'
import { selectUser } from 'features/userSlice'
import {
  decrementQuantity,
  getUserCart,
  incrementQuantity,
  selectShopCart,
} from 'features/shopSlice'
import { useDispatch, useSelector } from 'react-redux'
import { db } from 'firebase-config'
import firebase from 'firebase/app'
import { CgShoppingCart } from 'react-icons/cg'
import { FiDelete } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import {
  MenuWrapper,
  MenuContainer,
  ShopCartQuantity,
  CartContent,
  CartProduct,
  Img,
  CartProductInfo,
  QuantityProduct,
  QuantityBtn,
  OrderBtn,
} from './UserCartStyled'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '15px',
    top: '15px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '34px',
    width: '34px',
    top: '10px',
    right: '15px',
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

const UserCart = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const shopCart = useSelector(selectShopCart)

  useEffect(() => {
    if (user.isLogged) {
      dispatch(getUserCart(user.userInfo.uid))
    }
  }, [dispatch, user])

  const handleRemoveFromCart = (shopItem) => {
    db.collection('users')
      .doc(user.userInfo.uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayRemove(shopItem),
      })
    dispatch(getUserCart(user.userInfo.uid))
  }

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id))
  }

  return (
    <MenuWrapper>
      <Menu
        right
        styles={styles}
        customBurgerIcon={<CgShoppingCart size='2.5rem' color='#eee' />}>
        <MenuContainer>
          {user.isLogged ? (
            <>
              <ShopCartQuantity>
                Products in cart ({shopCart.length})
              </ShopCartQuantity>
              <CartContent>
                {shopCart.map((item) => (
                  <CartProduct key={item.id}>
                    <Img src={item.firstImage} alt='' />
                    <CartProductInfo>{item.name}</CartProductInfo>
                    <CartProductInfo>{item.price} EUR</CartProductInfo>
                    <QuantityProduct>
                      <CartProductInfo>quantity</CartProductInfo>
                      <QuantityBtn onClick={() => decrementQuantity(item.id)}>
                        <AiOutlineMinus color='#111' size='1.5rem' />
                      </QuantityBtn>
                      <p>{item.quantity}</p>
                      <QuantityBtn onClick={() => handleIncrementQuantity(item.id)}>
                        <AiOutlinePlus color='#111' size='1.5rem' />
                      </QuantityBtn>
                      <QuantityBtn onClick={() => handleRemoveFromCart(item)}>
                        <FiDelete color='#111' size='2.5rem' />
                      </QuantityBtn>
                    </QuantityProduct>
                  </CartProduct>
                ))}
              </CartContent>
              <OrderBtn>
                <Link to='/'>Go to order</Link>
              </OrderBtn>
            </>
          ) : (
            <p>You must be log in to see your shopping cart.</p>
          )}
        </MenuContainer>
      </Menu>
    </MenuWrapper>
  )
}

export default UserCart
