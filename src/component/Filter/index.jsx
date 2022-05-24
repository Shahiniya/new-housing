import React,{useRef,useEffect} from 'react'
import { Container, Wrapper,Icon, Advanced, Section } from './style';
import {Button,Input} from '../Generic';
import {Popover} from 'antd';
import { useNavigate ,useLocation} from 'react-router-dom';

export const Filter = () => {

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const onChange = ({target}) => {
  const {value,name} = target;
  navigate(`${pathname}?${name}=${value}`)

} 
 
    // const popoverRef = useRef('click');
    // useEffect(()=>{popoverRef.current?.trigger='click'},[])
    const advancedSearch = <Advanced >
    <Advanced.Title>Address</Advanced.Title>
    <Section>
     <Input placeholder={'Country'} /> 
     <Input placeholder={'Region'} />
     <Input onChange={onChange} name='city' placeholder={'City'} />
     <Input placeholder={'ZIP code'} />
     </Section>
    <Advanced.Title>Apartment info</Advanced.Title>
    <Section>
    <Input  placeholder={'Room'} /> 
    <Input  placeholder={'Size'} /> 
    <Input  placeholder={'Sort'} /> 
        </Section>
    <Advanced.Title>Price</Advanced.Title>
    <Section>
    <Input placeholder={'Min Price'} /> 
    <Input placeholder={'Max Price'} /> 
    </Section>
    <Section>
    <Button width='131px'  type={'secondary'}>Cancel</Button>
    <Button width='131px'  type={'primary'}>Search</Button>
    </Section>
    </Advanced>


  return (
    <Container>
        <Wrapper>
        <Input 
        pl='42px'
        placeholder={'Enter an address,neighborhood,city or ZIP code'}>
            <Icon.Home/>
        </Input>

        <Popover
        // ref={popoverRef}
        placement='bottomRight'
         content={advancedSearch} 
         trigger={'click'}
         >
            <Button width='131px' ml={20} type='secondary'> 
           <Icon.Setting/> Advanced</Button>
        </Popover>
            <Button width='131px' ml={20} type='primary' >
           <Icon.Search/> Search</Button>

        </Wrapper>
    </Container>
  )
}
export default Filter;