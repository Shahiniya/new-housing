import React,{useState} from 'react'
import { Container, Wrapper,Icon } from './style';
import {Button,Input} from '../Generic';
import {Popover} from 'antd';
import UseSearch from '../../hooks/useSearch';
import { useQuery } from 'react-query';
import { useHttp } from '../../hooks/usehttp';
import { AdvancedSearch } from './AdvancedSearch';

export const Filter = () => {
  const query = UseSearch();
  const [list,setList] = useState([])
  // const [def,setDef] = useState(Number(query.get('category_id')));

  // useEffect(()=>{
  //   let res = list.filter((value,index)=> index === Number( query.get('category_id')))
  //   res && setDef( res[0]
  //     )
  // },[])

  const [state,setState] = useState({
    country : query.get('country'),
    city : query.get('city'),
    region : query.get('region'),
    zip : query.get('zipCode'),
    maxPrice : query.get('maxPrice'),
    minPrice : query.get('minPrice'),
    address : query.get('address'),
    house : query.get('houseName'),
    rooms : query.get('rooms'),


  })
  // const {pathname} = useLocation();
//  console.log(useReplace(),'useReplace')
// const {REACT_APP_BASE_URL:url} = process.env;

// useQuery(
//   '',
//   () => {
//     return fetch(`${url}/v1/categories`).then((res)=> res.json());
//   },
//   {
//     onSuccess: (res) => {
//       // let response = res?.data?.map((value) => value.name)
//       setList(res?.data || [])
//     }
//   }
// )

const {request} = useHttp();

useQuery('',()=>
  request ({
    url:`/v1/categories/list`
  
}),
{
  onSuccess:(res) =>{
    if(res?.data) setList(res?.data || []);
  }
});





//   const onChange = ({target}) => {
//   const {value,name} = target;
//   // navigate(`${pathname}?${name}=${value}`)
//   navigate(`${UseReplace(name,value)}`);
//   setState({...state,[name]:value})

// } 

// const onSelect = (target) => {
//   setDef(target);
//   navigate(`${UseReplace('category_id',target)}`)
// };

//   
    
//     const advancedSearch =()=> (
//       

// console.log(def,'def')
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
         content={
           <AdvancedSearch
           state={state}
           setState={setState}
           list={list}
           query={query}
           />
         } 
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