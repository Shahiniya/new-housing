import React from 'react'
import { Container } from './style';
import Filter  from '../Filter'
import Carousel  from './Carousel'
// import { Card } from '../Card';
import Recommended from '../Recommended';


export const Home = () => {
  return (
    <Container>
      <Filter/>
      <Carousel/>
      <Recommended/>
    </Container>
  )
};

export default Home;