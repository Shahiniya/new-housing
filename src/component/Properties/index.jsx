import React, { useState } from 'react'
import Card from '../Card';
import Filter from '../Filter';
import { Container,Total, Wrapper} from './style';
import {useQuery} from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks/usehttp';


export const Properties = () => {

  const [data,setData] = useState([])
  const {search} = useLocation();
  const navigate = useNavigate();
  const {request} = useHttp();
  useQuery(
    ['', search],
   ()=>  request({url:`/v1/houses/list${search}`}) // return fetch(`${url}/v1/houses/list${search}`).then((res)=> res.json());
   ,{
        onSuccess:(res)=> setData(res?.data || [])
      })

const onSelect = (id)=>{
 navigate(`/properties:${id}`)
}
  return (
    <Container>
      <Filter/>
      <div className='title' >Properties</div>
      <div className='description center' >Siz orzu qilgan,siz izlagan shinam va arzon uylar</div>
    <Total className='description'>
        {data?.length} Total
    </Total>
    <Wrapper>
     {data?.map(({value,i}) => {
      return( <Card key={i} onClick={()=>onSelect(value.id)}  info={value} />)
     })}
      
    </Wrapper>
     </Container>
  )
}
export default Properties;