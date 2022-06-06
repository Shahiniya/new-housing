import React, {useRef}from 'react'
import { Container, Img ,Icon, Wrapper, Opacity} from './style';
import img1 from '../../../assets/image/uy1.png';
import img2 from '../../../assets/image/uy2.png';
import img3 from '../../../assets/image/uy3.png';


export const Carousel = () => {
  const slider = useRef()
  return (
    <Wrapper>
    <Icon.Left  onClick={()=> slider.current.prev()}/>
    <Icon.Right onClick={()=> slider.current.next()}/>

    <Container  autoplay dots ref={slider} >
    <Opacity/>
      <Img src={img1}/>
      <Img src={img2}/>
      <Img src={img3}/>

    </Container>
    </Wrapper>
  )
};

export default Carousel;