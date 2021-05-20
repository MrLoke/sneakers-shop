import { FaUsers } from 'react-icons/fa'
import { FiPackage } from 'react-icons/fi'
import { IoPricetagsOutline } from 'react-icons/io5'
import { GiBackwardTime } from 'react-icons/gi'
import {
  Container,
  HeaderContainer,
  Header,
  List,
  Item,
  ItemTitle,
  ItemDesc,
} from './ShopProfitsStyled'

const ShopProfits = () => {
  return (
    <section>
      <HeaderContainer>
        <Header>Sneakers world profits. Join to us!</Header>
      </HeaderContainer>
      <Container>
        <List>
          <Item>
            <FaUsers color='#222' size='6rem' />
            <ItemTitle>Velit molestias</ItemTitle>
            <ItemDesc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
              commodi.
            </ItemDesc>
          </Item>
          <Item>
            <FiPackage color='#222' size='6rem' />
            <ItemTitle>Inventore ratione</ItemTitle>
            <ItemDesc>
              Distinctio qui ipsa aperiam doloremque laudantium vel adipisicing
              elit.
            </ItemDesc>
          </Item>
          <Item>
            <IoPricetagsOutline color='#222' size='6rem' />
            <ItemTitle>Distinctio qui</ItemTitle>
            <ItemDesc>
              Provident quaerat inventore ratione hic enim cupiditate velit
              molestias minus, iure vero.
            </ItemDesc>
          </Item>
          <Item>
            <GiBackwardTime color='#222' size='6rem' />
            <ItemTitle>Maxime nostrum</ItemTitle>
            <ItemDesc>
              Ipsa dolorem iure excepturi quae tenetur maxime nostrum.
            </ItemDesc>
          </Item>
        </List>
      </Container>
    </section>
  )
}

export default ShopProfits
