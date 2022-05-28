import React, { useRef } from 'react'
import { Container, Wrapper ,Carousel,Icon} from './style'
import Card from '../Card';
import AliceCarousel from 'react-alice-carousel';

export const Categories = () => {
  const slider = useRef();
  const items = [
    <Card  mr={20}/>,
    <Card  mr={20}/>,
    <Card  mr={20}/>,
    <Card  mr={20}/>,
    // <Card  mr={10}/>,
      ]
  return (
    <Container>
      <div className='title center' >Categories</div>
      <div className='description center' >Siz orzu qilgan,siz izlagan shinam va arzon uylar</div>
      <Wrapper>
        <Carousel >
        <AliceCarousel ref={slider} autowidth items={items} />
        <Icon.Left onClick={()=> slider.current?.slidePrev()} />
        <Icon.Right onClick= {() => slider.current?.slideNext()} />
        </Carousel>
        </Wrapper>
    </Container>
  )
}
export default Categories