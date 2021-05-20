import { Swiper, SwiperSlide } from 'swiper/react'
import { Container, Slide, ImgSlide } from './HomeSliderStyled'
import Slide1 from 'assets/slide1.jpg'
import Slide2 from 'assets/slide2.jpg'
import Slide3 from 'assets/slide3.jpg'
import Slide4 from 'assets/slide4.jpg'
import Slide5 from 'assets/slide5.jpg'
import Slide6 from 'assets/slide6.jpg'
import Slide7 from 'assets/slide7.jpg'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'

SwiperCore.use([Autoplay, Pagination, Navigation])

const HomeSlider = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='mySwiper' style={{zIndex: '1'}}>
        <SwiperSlide><Slide><ImgSlide src={Slide1} alt='' /></Slide></SwiperSlide>
        <SwiperSlide><Slide><ImgSlide src={Slide2} alt='' /></Slide></SwiperSlide>
        <SwiperSlide><Slide><ImgSlide src={Slide3} alt='' /></Slide></SwiperSlide>
        <SwiperSlide><Slide><ImgSlide src={Slide4} alt='' /></Slide></SwiperSlide>
        <SwiperSlide><Slide><ImgSlide src={Slide5} alt='' /></Slide></SwiperSlide>
        <SwiperSlide><Slide><ImgSlide src={Slide6} alt='' /></Slide></SwiperSlide>
        <SwiperSlide><Slide><ImgSlide src={Slide7} alt='' /></Slide></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default HomeSlider
