import React, { useRef,useState } from 'react'
import { Container, Wrapper 
  ,Carousel,Icon, 
  CategoryWrapper, Img} from './style'
import Card from '../../Card';
import AliceCarousel from 'react-alice-carousel';
import { useQuery } from 'react-query';
import uy1 from '../../../assets/image/uy1.png'

 const {REACT_BASE_APP_URL: url} = process.env 

const Category = ({title})=>{
  return <CategoryWrapper>
      <Img  src={uy1} alt='' />
  </CategoryWrapper>
}



export const Categories = () => {
  const slider = useRef();
 const [list,setList] = useState([])

    useQuery(" ", () => { 
      return fetch(`${url}/v1/categories`, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }).then((res) => res.json())
      },
      {
        onSuccess: (res) => {
          console.log(res,'res')
          let response = res?.dataList[0]?.map((value)=> (
          <div style={{height:'200px', width:'500px'}}>
             <Category title={value} />
          </div>
          ))
          setList(response || [])
        },
      }
      )


  return (
    <Container>
      <div className='title center' >Categories</div>
      <div className='description center' >Siz orzu qilgan,siz izlagan shinam va arzon uylar</div>
      <Wrapper>
        <Carousel >
        <AliceCarousel ref={slider} autowidth items={list} />
        <Icon.Left onClick={()=> slider.current?.slidePrev()} />
        <Icon.Right onClick= {() => slider.current?.slideNext()} />
        </Carousel>
        </Wrapper>
    </Container>
  )
}
export default Categories