import { getUserCart } from 'features/shopSlice'
import { selectUser } from 'features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { db } from 'firebase-config'
import firebase from 'firebase/app'
import { Container, ItemImg, ProductInfo, AddToCartBtn } from './ProductStyled'

const Product = ({ item }) => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const history = useHistory()

  const handleAddToCart = (shopItem) => {
    db.collection('users')
      .doc(user.userInfo.uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          ...shopItem,
          quantity: 1,
        }),
      })
    dispatch(getUserCart(user.userInfo.uid))
  }

  return (
    <Container>
      <ItemImg
        src={item.firstImage}
        onClick={() => history.push(`/product/${item.name}`)}
        onMouseOver={(e) => (e.currentTarget.src = item.secondImage)}
        onMouseOut={(e) => (e.currentTarget.src = item.firstImage)}
        alt=''
        loading='lazy'
      />
      <ProductInfo>
        <b>{item.name}</b>
      </ProductInfo>
      <ProductInfo>{item.price} EUR</ProductInfo>
      <AddToCartBtn onClick={() => handleAddToCart(item)} disabled={!user.isLogged}>Add to cart</AddToCartBtn>
    </Container>
  )
}

export default Product
