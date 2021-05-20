import ProductDetails from 'components/ProductDetails/ProductDetails'
import { selectShopItems } from 'features/shopSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {Container} from './ProductPageStyled'

const ProductPage = () => {
  const { name } = useParams()
  const items = useSelector(selectShopItems)

  return (
    <Container>
      {items.map((item) =>
        item.name === name ? (
          <ProductDetails key={item.id} itemInfo={item} items={item.size} />
        ) : null
      )}
    </Container>
  )
}

export default ProductPage
