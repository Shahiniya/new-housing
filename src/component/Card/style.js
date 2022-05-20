import styled from 'styled-components';
import { ReactComponent as bed } from '../../assets/icon/bed.svg';
import { ReactComponent as bath } from '../../assets/icon/bath.svg';
import { ReactComponent as garage } from '../../assets/icon/garage.svg';
import { ReactComponent as triangle } from '../../assets/icon/ruler.svg';
import { ReactComponent as love } from '../../assets/icon/love.svg';
import { ReactComponent as resize } from '../../assets/icon/resize.svg';
import { ReactComponent as nouser } from '../../assets/icon/user.svg';

const Container = styled.div`
     display:flex;
     flex-grow:10;
     flex-direction:column;
     max-width:380px;
     min-width:280px;
     height:430px;
     background:#ffffff;
     border:1px solid #e6e9ec;
     border-radius:3px;
     margin-right:c${({mr})=> mr && `${mr}px`};
`;
const Img = styled.img`
/* width:100%; */
min-height:220px;
max-height:220px;
/* width:fit-content; */
max-width:380px;
min-width:280px;
`;

const InfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
    padding-bottom:0;
    border-top: 1px solid #e6e9ec;
    position: relative;
`;

const Info = styled.div`
display:flex;
justify-content:space-between;
padding:16px 0;

`;

Info.Detail = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)`
/* path{
    fill:red;
} */
`;
Icons.Bath = styled(bath)`

`;
Icons.Garage = styled(garage)`

`;
Icons.Ruler = styled(triangle)`

`;
Icons.Love = styled(love)`
margin-left:20px;
width:35px;
height:35px;
padding:10px;
background:#f6f8f9;
border-radius:50%;
cursor:pointer;
:active{
    transform:scale(0.97)
}
`;
Icons.Resize = styled(resize)`
    margin-left:20px;
width:35px;
height:35px;
padding:10px;
cursor:pointer;
:active{
    transform:scale(0.97)
}
`;
const User = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
right:20px;
top:-23px;
width:46px;
height:46px;
border-radius:50%;
background:#ffffff;
box-shadow: 0 0 10px rgba(13,38,59,0.2);
overflow: hidden;
`;
User.Img = styled.img`
    width:43px;
    height:43px;
    object-fit:cover;
`; 
const Footer = styled.div`
display:flex;
border-top:1px solid #e6e9ec;
padding:0 20px;
align-items:center;
height:100%;
`;

export {Footer,Container,Img,InfoWrapper,Info,Icons,User}