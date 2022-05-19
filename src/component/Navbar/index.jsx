import React from 'react'
import  {navbar} from '../../utils/navbar';
import { Wrapper,Logo,Container, Body, 
    NavbarWrapper, NavbarBody,Link } from './style';
import {useNavigate, Outlet} from 'react-router-dom';
import {Button} from '../Generic/Button/index' 
export const Navbar = () => {
 const navigate = useNavigate();

  return (
    <Wrapper>
        <Container>
            <NavbarWrapper>
            <Logo onClick={()=> navigate('/home')}>
              <Logo.Icon/>
              <Logo.Title>Houzing</Logo.Title>
            </Logo>
                <NavbarBody>
                    {navbar.map(({title,id,path})=>{
                        return <Link to={path} key={id} > 
                        <h1>{title}</h1>
                            </Link>;
                    })}
                </NavbarBody>
                
                <Button  onClick={() => navigate('/login')} width={'120px'}>Login</Button>
                
            </NavbarWrapper>
        </Container>

        <Body>
            <Outlet/>
        </Body>
    </Wrapper>
  )
}
export default Navbar;


