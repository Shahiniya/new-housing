import React , {useState} from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import {Input,Button} from '../../component/Generic'
import { Container, Wrapper } from './style'


const {REACT_APP_BASE_URL : url} = process.env

export const Signin = () => {

    const [email,setEmail] = useState('')
    const [pw,setPw] = useState('')
    const navigate = useNavigate()

    const {mutate} = useMutation(()=> {return fetch(`${url}/public/auth/login`,
    {method:'POST',
    headers:{
    'Content-type':'application/json'}, 
    body:JSON.stringify({email,password:pw}) })
    .then((res) => res.json())
  }
     
      
    );

    const onSubmit = ()=>{
      // console.log(email);
      // console.log(pw);
      mutate('hey',
      {
        onSuccess:(res) => {
          // console.log(res,'res')
          if (res?.authenticationToken){
          localStorage.setItem('token', res?.authenticationToken)
          // console.log(res, 'token')
          navigate('/myproperties')
          }
        },
        onError: (res) => {
         console.log(res, 'error')
       },
        
        })

    }
  return (
    <Container>
    <div className='title '>Sign in</div>
    <Wrapper>
      <Input onChange={({target})=> setEmail(target?.value)} value={email} placeholder={'Email'} />
      <Input onChange={({target})=> setPw(target?.value)} value={pw} placeholder={'Password'} />
      <Button onClick={onSubmit} type='primary'>Login</Button>
      </Wrapper>
    </Container>
  )
}
export default Signin