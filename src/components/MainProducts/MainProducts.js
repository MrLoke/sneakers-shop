import { useEffect } from 'react'
import Product from 'components/Product/Product'
import { Link } from 'react-router-dom'
import { setShopItems, selectShopItems } from 'features/shopSlice'
import { useDispatch, useSelector } from 'react-redux'
import { db } from 'firebase-config'
import ItemLoader from 'components/ItemLoader/ItemLoader'
import {
  ShowMoreContainer,
  Container,
  HeaderContainer,
  Header,
  ShowMoreBtn,
} from './MainProductsStyled'

const MainProducts = () => {
  const dispatch = useDispatch()
  const shopItems = useSelector(selectShopItems)

  useEffect(() => {
    const unmount = db
      .collection('shop')
      .doc('main-products')
      .collection('items')
      .onSnapshot((snapshot) => {
        const tempShopItems = []
        snapshot.forEach((doc) => {
          tempShopItems.push({ ...doc.data(), id: doc.id })
        })
        dispatch(setShopItems(tempShopItems))
      })
    return unmount
  }, [dispatch])

  return (
    <section>
      <HeaderContainer>
        <Header>Recomended top sneakers</Header>
      </HeaderContainer>
      <Container>
        {shopItems.length > 0 ? (
          shopItems.map((item) => <Product key={item.id} item={item} />)
        ) : (
          <>
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
          </>
        )}
      </Container>
      <ShowMoreContainer>
        <ShowMoreBtn>
          <Link to='/'>Show more</Link>
        </ShowMoreBtn>
      </ShowMoreContainer>
    </section>
  )
}

export default MainProducts
