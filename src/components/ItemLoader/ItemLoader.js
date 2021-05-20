import ContentLoader from 'react-content-loader'

const ItemLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox='0 0 400 460'
      backgroundColor='#fff'
      foregroundColor='#ddd'
      {...props}>
      <rect x='126' y='142' rx='0' ry='0' width='325' height='280' />
    </ContentLoader>
  )
}

export default ItemLoader
