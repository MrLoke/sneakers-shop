import Img1 from 'assets/img1.jpg'
import Img2 from 'assets/img2.jpg'
import Img3 from 'assets/img3.jpg'
import Img4 from 'assets/img4.jpg'
import Img5 from 'assets/img5.jpg'
import Img6 from 'assets/img6.jpg'
import Img7 from 'assets/img7.jpg'
import Img8 from 'assets/img8.jpg'
import Img9 from 'assets/img9.jpg'
import { HeaderContainer, Header, Row, Column, Img } from './ImageGridStyled'

const ImageGrid = () => {
  return (
    <section>
      <HeaderContainer>
        <Header>Nobis expedita distinctio consequuntur</Header>
      </HeaderContainer>
      <Row>
        <Column>
          <Img src={Img1} alt='Stock photo' loading='lazy' decoding='sync' />
          <Img src={Img2} alt='Stock photo' loading='lazy' decoding='sync' />
          <Img src={Img8} alt='Stock photo' loading='lazy' decoding='sync' />
        </Column>
        <Column>
          <Img src={Img3} alt='Stock photo' loading='lazy' decoding='sync' />
          <Img src={Img9} alt='Stock photo' loading='lazy' decoding='sync' />
          <Img src={Img4} alt='Stock photo' loading='lazy' decoding='sync' />
        </Column>
        <Column>
          <Img src={Img7} alt='Stock photo' loading='lazy' decoding='sync' />
          <Img src={Img5} alt='Stock photo' loading='lazy' decoding='sync' />
          <Img src={Img6} alt='Stock photo' loading='lazy' decoding='sync' />
        </Column>
      </Row>
    </section>
  )
}

export default ImageGrid
