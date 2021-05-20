import { useEffect, useRef } from 'react'
import HeroVideoBg from 'assets/hero-video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeaderContainer,
  Header,
} from './HeroVideoStyled'

const HeroVideo = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: [0.35, 0.75],
    }

    const handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      })
    }

    const observer = new IntersectionObserver(handlePlay, options)

    observer.observe(videoRef.current)
  })

  return (
    <section>
      <HeaderContainer>
        <Header>Libero architecto adipisci rerum mollitia</Header>
      </HeaderContainer>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            src={HeroVideoBg}
            ref={videoRef}
            loop
            muted
            type='video/mp4'
          />
        </HeroBg>
      </HeroContainer>
    </section>
  )
}

export default HeroVideo
