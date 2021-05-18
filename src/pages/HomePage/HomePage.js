import MainProducts from 'components/MainProducts/MainProducts'
import HomeSlider from 'components/HomeSlider/HomeSlider'
import HeroVideo from 'components/HeroVideo/HeroVideo'
import ImageGrid from 'components/ImageGrid/ImageGrid'
import ShopProfits from 'components/ShopProfits/ShopProfits'

const HomePage = () => {
  return (
    <>
      <HomeSlider />
      <MainProducts />
      <HeroVideo />
      <ShopProfits />
      <ImageGrid />
    </>
  )
}

export default HomePage
