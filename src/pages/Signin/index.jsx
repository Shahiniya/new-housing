import React , {useState} from 'react'
import { useQuery, useMutation } from 'react-query'
import {Input,Button} from '../../component/Generic'
import { Container, Wrapper } from './style'

export const Signin = () => {

    const [email,setEmail] = useState('')
    const [pw,setPw] = useState('')

    const {mutate} = useMutation(()=> {fetch('/public/auth/login',{method:'POST'}).then((res) => res.json())
  },
     {
       onSuccess:(res) => {
         console.log(res,'res')
       },
       onError: (res) => {
        console.log(res, 'error')
      },
       
       }
      
    );

    const onSubmit = ()=>{
      console.log(email);
      console.log(pw);
      mutate()

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