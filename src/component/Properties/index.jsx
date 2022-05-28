import React, { useState } from 'react'
import Card from '../Card';
import Filter from '../Filter';
import { Container,Total, Wrapper} from './style';
import {useQuery} from 'react-query'
import { useLocation } from 'react-router-dom';
// import useSearch from '../../hooks/useSearch';


const {REACT_APP_BASE_URL:url} = process.env;
export const Properties = () => {

  const [data,setData] = useState([])
  const {search} = useLocation();

  useQuery(
    ['get data', search],
   ()=> {
    return fetch(`${url}/v1/houses/list${search}`).then((res)=> res.json());
      },
      {
        onSuccess:(res)=> {
        
          setData(res?.dataList[0] || []);
        }
      })
console.log(data,'res');

  return (
    <Container>
    
    <Filter/>
      <div className='title' >Proporties</div>
      <div className='description center' >Siz orzu qilgan,siz izlagan shinam va arzon uylar</div>
    <Total className='description'>
        {data?.length} Total
    </Total>
    <Wrapper>
     {data.map((value,id) => {
      return <Card key={id} info={value} />
     })}
      
    </Wrapper>
     </Container>
  )
}
export default Properties;