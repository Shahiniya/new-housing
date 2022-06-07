import React,{useState} from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Container } from './style';
// import Filter from '../Filter';

const {REACT_APP_BASE_URL:url} = process.env

export const SelectedHouse = () => {

    const [state,setState] = useState({})
    const {id} = useParams();
    
    useQuery('get data',()=>{
        return fetch(`${url}/v1/house/${id.replace(':','')}`,
        {
          method:'GET',
          headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
          }
    }).then((res) => res.json())
    },
      {
        onSuccess:(res)=>{
          // console.log(res,'res');
          setState(res?.data)
        },
        keepPreviousData:true,
        refetchOnWindowFocus:false
      },

    )
    console.log(id)
  return (
    <Container>
    <h1>{state?.address}</h1>
    {
      state?.attachments?.map((value)=>{
        return (
          <div>
          <img src={value?.imgPath} alt='' />
          </div>
           ) 
      })
    }
    </Container>
  )
}
export default SelectedHouse