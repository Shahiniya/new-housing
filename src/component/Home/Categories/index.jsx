import React, { useRef,useState } from 'react'
import { Container, Wrapper 
  ,Carousel,Icon, 
  CategoryWrapper, Img, ArrowLeft, Cards,Details, ArrowRight} from './style'
import Card from '../../Card';
import AliceCarousel from 'react-alice-carousel';
import { useQuery } from 'react-query';
import uy4 from '../../../assets/image/uy4.png'
import {useHttp} from  '../../../hooks/usehttp'
import { useNavigate } from 'react-router-dom';
 const {REACT_BASE_APP_URL: url} = process.env 

const Category = ({value,id})=>{
  const navigate = useNavigate()

    // const goto = () =>{
    //   navigate(`/properties/category_id=${id}`)
    // }

  return <CategoryWrapper >
      <Img  src={uy4} alt='test' />
      <Details>{value.name}</Details>
  </CategoryWrapper>
}
export const Categories = () => {
  const slider = useRef();
 const [list,setList] = useState([])
 const { request } = useHttp();

 useQuery("", () => request({ url: '/v1/categories/list' }), {
  onSuccess: (res) => {
    console.log(res, "res");
    let respons = res?.data?.map((value) => (
      <Category key={value.id} value={value} />
    ));
    setList(respons || []);
  },
});

  return (
    <Container>
      <div className="title center">Category</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
         
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={list}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
)}
export default Categories;



