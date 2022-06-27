import React from 'react'
import { useQuery,useMutation } from 'react-query'
import { Container,Table, Section, Wrapper, Tr,Th,Td,Icons } from './style';
import { useHttp } from '../../hooks/usehttp';
// import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';
import {Button} from '../../component/Generic/Button'
import {Popconfirm,message} from 'antd'

export const Myproperties = () => {
  // const [data,setData] = useState([]);
  const {request} = useHttp();
  const navigate = useNavigate();

   const {data,refetch} = useQuery('getMyproperties', (res) => {
      return request({url:'/v1/houses/me', token: true})
    },
    );
  
const {mutate} = useMutation((id)=>{
  return request ({url:`/v1/houses/${id}`, method:'DELETE', token:true})
})

  const confirm =(id) => {
    // console.log(e);
    mutate(id,{
      onSuccess:(res)=>{
        if(res?.success){
          message.success('Deleted')
         refetch()
        }
      }
    })
    message.success('Click on Yes')
  };
  
  const cancel =(e) => {
    console.log(e);
    message.error('Click on No')
  };

  return (
    <Wrapper>
    <Section>
    <div className='title'>PROPERTIES</div>
    <Button type={'primary'} width={'131px'}
    onClick={()=> navigate('/properties/addnew')}
    >Add New</Button> 
    </Section>
    <Table>
      <thead>
      <Tr>
          <Th>Listing Title</Th>
          <Th>Date Published</Th>
          <Th>Status</Th>
          <Th>View</Th>
          <Th>Action</Th>
      </Tr>
      </thead>
      <tbody>
        {
        data?.data?.map((value) => {
          return <Tr>
              <Td>{value?.address}</Td>
              <Td>{new Date().getFullYear()}</Td>
              <Td>{new Date().getFullYear()}</Td>
              <Td>123456</Td>
              <Td>
                   <Container>
                      <Icons.Edit onClick={()=>navigate(`/properties/addnew/:${value.id}`)}/>
                      <Popconfirm
                  title="Uyni o'chirmoqchimisiz?"
                  onConfirm ={()=>confirm(value?.id)}
                  onCancel = {cancel}
                  okText = 'Yes'
                  cancelText= 'No'
                      >
                      <Icons.Trash />
                      </Popconfirm>
                   </Container>
              </Td>



          </Tr>
        }
      )}
      </tbody>


    </Table>
    </Wrapper>
  )
}
export default Myproperties