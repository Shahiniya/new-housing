import React from 'react'
import  {navbar} from '../../utils/navbar';
import { Wrapper,Logo,Container, Body, 
    NavbarWrapper, NavbarBody,Link, Profile } from './style';
import {useNavigate, Outlet} from 'react-router-dom';
import {Button} from '../Generic/Button/index' 
import {Footer} from '../Footer'

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
                    {navbar.map(({title,id,path,hidden})=>{
                        return (
                            !hidden && (<Link to={path} key={id} > 
                                 {title}
                             </Link>))
                    })}
                </NavbarBody>
                {
                    localStorage.getItem('token') ?(
                        <>
                    <Profile style={{color:'white'}} onClick={()=>navigate('/myproperties')}>Profile</Profile>
                    <Button  onClick={() =>{ 
                    localStorage.clear()
                     navigate('/home')
                    }} width={'120px'}>
                    Log Out
                    </Button>
                    
                    </>
                    ) : (<Button  onClick={() => navigate('/signin')} width={'120px'}>
                    Login
                    </Button>
                 )}
                
            </NavbarWrapper>
        </Container>

        <Body>
            <Outlet/>
        </Body>
        <Footer/>
    </Wrapper>
  )
}
export default Navbar;


