import React, { useRef,useState } from 'react'
import { Container, Wrapper ,Carousel,Icon} from './style'
import Card from '../Card';
import AliceCarousel from 'react-alice-carousel';
import { useQuery } from 'react-query';
 const {REACT_BASE_APP_URL: url} = process.env 

const Title = ({title})=>{
  return <h1>{title}</h1>
}



export const Categories = () => {
  const slider = useRef();
  const items = [
    <Card  mr={20}/>,
    <Card  mr={20}/>,
    <Card  mr={20}/>,
    <Card  mr={20}/>,
    // <Card  mr={10}/>,
      ]
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
          let response = res?.dataList?.[0]?.map((value)=> (
          <div style={{height:'200px', width:'500px'}}>
             <Title title={value} />
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