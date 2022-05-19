import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {ReactComponent as logo} from '../../assets/icon/logo.svg';
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;

`;

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background: var(--primaryColor);

    -webkit-touch-callout:none;//10S Safari;
    -webkit-user-select:none;//Safari;
    -khtml-user-select:none;//Konqueror HTML;
    -moz-user-select:none;//old versions of firefox;
    -ms-user-select:none;//internet Explorere/edge;
    user-select: none; //non orefixed version,currently supportedopera and Firefox;
    `;
const NavbarWrapper = styled.div`
    display:flex;
    align-items:center;
    max-width:1440px;
    height:64px;
    font-family:'Montserrat';
    font-style:normal;
    font-weight:400;
    font-size:16px;
    line-height:24px;
    width:100%;
    color:#ffffff;

`;
const Logo = styled.div`
    display:flex;
    align-items:center;
    cursor: pointer;
`;

 Logo.Icon = styled(logo)`

`;

Logo.Title = styled.div`
    margin-left:11px;
    font-size:20px;
    font-weight:500;

`;
const NavbarBody = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    justify-content:center;
    color:white;
    .active{
        color:#00fff5 ;
    }
`;
const Link = styled(NavLink)`
    color:white;
    text-decoration:none;
    margin:0 32px;
    font-style:normal;
    font-weight:400;
    font-size:18px;
    line-height:24px;
`;

const Body = styled.div`
    display:flex;
    width:100%;
`;
export { Wrapper,Logo,Link,NavbarBody,Container,Body,NavbarWrapper }