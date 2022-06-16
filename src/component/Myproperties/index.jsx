import React,{useState} from 'react'
import { useQuery } from 'react-query'
import { Container, Section, Wrapper } from './style';
import { useHttp } from '../../hooks/usehttp';
import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';
import {Button} from '../../component/Generic/Button'
export const Myproperties = () => {
  // const [data,setData] = useState([]);
  const {request} = useHttp();
  const navigate = useNavigate();

   const {data} = useQuery('getMyproperties', (res) => {
      return request({url:'/v1/houses/me', token: true})
    },
    // {onSuccess:(res) => {console.log(res)
    //  setData(res?.data || [])
    // }}
    )

  return (
    <Wrapper>
    <Section>
    <div className='title'>PROPERTIES</div>
    <Button type={'primary'} width={'131px'}
    onClick={()=> navigate('/properties/addnew')}
    >Add New</Button> 
    </Section>
    <Container>
      {
        data?.data?.map((value) => {
          return <Card info={value} key={value.id}/>
        }
      )}
    </Container>
    </Wrapper>
  )
}
export default Myproperties