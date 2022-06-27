import React,{useState} from 'react';
import { Select } from 'antd';
import { useLocation,useNavigate } from 'react-router-dom';
import {UseReplace} from '../../hooks/useReplace';
import { Button,Input } from '../Generic';
import { Advanced,Section } from './style';

export const AdvancedSearch = ({state,setState,query,list}) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const onChange = ({target})=>{
        const {value,name} = target;
        setState({...state, [name]:value})
        navigate(`${pathname}${UseReplace(name,value)}`)
        };

    const onSelect = (value) =>{
        setDef(value);
        navigate(`/properties/category_id=${value}`)
    };

    const [def,setDef] = useState(
        Number(query.get('category_id')) > 0
        ? Number(query.get('category_id'))
        : 'Select Category'
    )

    const onClear = () => {
            setState({
              country : '',
            city : '' ,
           region : '',
            zip : '',
            maxPrice : '',
            minPrice : '',
            address : '',
            house : '',
            rooms : '',
            });
            setDef('Select Category')
            navigate(`/properties`)
        }

    const {Option} = Select;

  return (
    <Advanced >
         <Advanced.Title>Address</Advanced.Title>
         <Section>
        <Input onChange={onChange} 
         value={state.country} 
         name='country' placeholder={'Country'}
        pl={20}
         /> 
    
         <Input onChange={onChange} 
         value={state.region} 
         name='region' placeholder={'Region'}
         pl={20}
         />
    
         <Input onChange={onChange}
          value={state.city} 
          name='city' placeholder={'City'} 
          pl={20}
          />

         <Input value = {state.zip}
          placeholder={'City'} 
          name='zip'
          pl={20}
          onChange={onChange}
          />
         
         </Section>
        <Advanced.Title>Apartment info</Advanced.Title>
        <Section>
        <Input value={state.address} 
         placeholder={'address'}
         pl={20}
         namr={'address'}
         onChange={onChange}
         /> 

        <Input value={state.house}
         placeholder={'house'}
         pl={20}
         onChange={onChange}
         name={'house'}
         /> 

        <Input value={state.rooms}
         placeholder={'rooms'}
         onChange={onChange}
         pl={20}
         name={'rooms'}
         /> 

            </Section>

        <Advanced.Title>Price</Advanced.Title>
        <Section>

        <Input
         value={state.minPrice} 
        placeholder={'Min Price'}
        name={'minPrice'}
        onChange={onChange}
        pl={20}
        /> 

        <Input value={state.maxPrice} 
        placeholder={'Max Price'}
        name={'maxPrice'}
        onChange={onChange}
        pl={20} /> 
       
        <Select 
        name=''
         id='' 
        value={def}
        onChange={onSelect} >
          {
            list.length > 0 &&
            list.map((value,i)=>{
              return <Option key={i} value={value.id}>{value.name}</Option>
            })
          }
        </Select>
        </Section>
        <Section>
        <Section>
        <Button width='131px'  type={'secondary'}
         onClick={onClear} >Cancel</Button>
        </Section>
        <Button width='131px'  type={'primary'}
         onClick={onClear} >Clear</Button>
        </Section>
        </Advanced>
      );
  
}
export default AdvancedSearch;