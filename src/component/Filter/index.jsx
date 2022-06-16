import React,{useEffect, useState} from 'react'
import { Container, Wrapper,Icon, Advanced, Section } from './style';
import {Button,Input} from '../Generic';
import {Popover,Select} from 'antd';
import { useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import UseReplace from '../../hooks/useReplace';
import { useQuery } from 'react-query';

const {Option} = Select;

export const Filter = () => {
  const query = useSearch();
  const navigate = useNavigate();
  const [list,setList] = useState([])
  const [def,setDef] = useState(Number(query.get('category_id')));

  useEffect(()=>{
    let res = list.filter((value,index)=> index === Number( query.get('category_id')))
    res && setDef( res[0]
      )
  },[])

  const [state,setState] = useState({
    country : query.get('country'),
    city : query.get('city'),
    region : query.get('region'),
    zipCode : query.get('zipCode'),
    maxPrice : query.get('maxPrice'),
    minPrice : query.get('minPrice'),
    address : query.get('address'),
    houseName : query.get('houseName'),
    rooms : query.get('rooms'),


  })
  // const {pathname} = useLocation();
//  console.log(useReplace(),'useReplace')
const {REACT_APP_BASE_URL:url} = process.env;

useQuery(
  '',
  () => {
    return fetch(`${url}/v1/categories`).then((res)=> res.json());
  },
  {
    onSuccess: (res) => {
      // let response = res?.data?.map((value) => value.name)
      setList(res?.data || [])
    }
  }
)

  const onChange = ({target}) => {
  const {value,name} = target;
  // navigate(`${pathname}?${name}=${value}`)
  navigate(`${UseReplace(name,value)}`);
  setState({...state,[name]:value})

} 

const onSelect = (target) => {
  setDef(target);
  navigate(`${UseReplace('category_id',target)}`)
};

  const onClear = () => {
    setState({
      country : '',
    city : '' ,
   region : '',
    zipCode : '',
    maxPrice : '',
    minPrice : '',
    address : '',
    houseName : '',
    rooms : '',
    });
    navigate(`/properties`)

  }
    
    const advancedSearch =()=> (
      <Advanced >
    <Advanced.Title>Address</Advanced.Title>
    <Section>
     <Input onChange={onChange} 
     value={state.country} 
     name='country' placeholder={'Country'} /> 

     <Input onChange={onChange} 
     value={state.region} 
     name='region' placeholder={'Region'} />

     <Input onChange={onChange}
      value={state.city} 
      name='city' placeholder={'City'} />
     <Input value = {state.zipCode} placeholder={'ZIP code'} />
     </Section>
    <Advanced.Title>Apartment info</Advanced.Title>
    <Section>
    <Input value={state.address}  placeholder={'Address'} /> 
    <Input value={state.houseName} placeholder={'House name'} /> 
    <Input value={state.rooms} placeholder={'Rooms'} /> 
        </Section>
    <Advanced.Title>Price</Advanced.Title>
    <Section>
    <Input value={state.minPrice} placeholder={'Min Price'} /> 
    <Input value={state.maxPrice} placeholder={'Max Price'} /> 
    <Select 
    name=''
     id='' 
    value={def}
    onChange={onSelect} >
      {
        list.map((value)=>{
          return <Option key={value.id} value={value.id}>{value.name}</Option>
        })
      }
    </Select>
    </Section>
    <Section>
    <Button width='131px'  type={'primary'}
     onClick={onClear} >Clear</Button>
    </Section>
    </Advanced>
  );

console.log(def,'def')
  return(
    <Container>
        <Wrapper>
        <Input 
        pl='42px'
        placeholder={'Enter an address,neighborhood,city or ZIP code'}>
            <Icon.Home/>
        </Input>

        <Popover
         placement='bottomRight'
         content={()=>advancedSearch(def)} 
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