import { getUserCart } from 'features/shopSlice'
import { selectUser } from 'features/userSlice'
import { useSelect } from 'downshift'
import { useDispatch, useSelector } from 'react-redux'
import { db } from 'firebase-config'
import firebase from 'firebase/app'
import {
  Container,
  ItemName,
  ItemInfoContainer,
  Img,
  ChooseSizes,
  SelectSizeBtn,
  SizesList,
  SizeItem,
  AddCartBtn,
} from './ProductDetailsStyled'

const ProductDetails = ({ itemInfo, items }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items })
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

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
      <Img src={itemInfo.firstImage} width='430' height='300' alt='' />
      <ItemInfoContainer>
        <ItemName>{itemInfo.name}</ItemName>
        <ItemName>{itemInfo.brand}</ItemName>
        <ItemName>{itemInfo.price} EUR</ItemName>
        <ChooseSizes>
          <SelectSizeBtn type='button' {...getToggleButtonProps()}>
            {selectedItem || 'Sizes'}
          </SelectSizeBtn>
          <SizesList {...getMenuProps()}>
            {isOpen &&
              items.map((item, index) => (
                <SizeItem
                  style={
                    highlightedIndex === index
                      ? { backgroundColor: '#bde4ff' }
                      : {}
                  }
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}>
                  {item}
                </SizeItem>
              ))}
          </SizesList>
        </ChooseSizes>
        <AddCartBtn onClick={() => handleAddToCart(itemInfo)}>Add to cart</AddCartBtn>
      </ItemInfoContainer>
    </Container>
  )
}

export default ProductDetails
