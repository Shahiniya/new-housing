import React,{useRef,useState} from 'react'
import { Container, Wrapper,Icon, Advanced, Section } from './style';
import {Button,Input} from '../Generic';
import {Popover} from 'antd';
import { useNavigate ,useLocation} from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import UseReplace from '../../hooks/useReplace';
import { useQuery } from 'react-query';


export const Filter = () => {

  const navigate = useNavigate();
  const query = useSearch();
  const [list,setList] = useState([])

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
  navigate(`${UseReplace(target?.value)}`)
}
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
    // const popoverRef = useRef('click');
    // useEffect(()=>{popoverRef.current?.trigger='click'},[])
    const advancedSearch = <Advanced >
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
    <select name='' id='' defaultValue={query.get('category_id')}
      onChange={onSelect} >
      {
        list.map((value,id)=>{
          return <option key={id} value={value}>{value}</option>
        })
      }
    </select>
    </Section>
    <Section>
    <Button width='131px'  type={'primary'} onClick={onClear} >Clear</Button>
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