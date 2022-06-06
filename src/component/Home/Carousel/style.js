import { Carousel } from 'antd';
import styled from 'styled-components';
import {ReactComponent as arrow} from '../../../assets/icon/arrow.svg'

const Wrapper = styled.div`
position:relative;
`;


const Container = styled(Carousel)`
      width:100%; 
      /* height:570px; */
      height:fit-content;
      position: relative;
     background:black;
`;
const Img = styled.img`
     background:black;
     width:100%;
     height:600px;
`;

const Icon = styled.div`
`;
Icon.Left = styled(arrow)`
      display:flex;
      justify-content:center;
      align-items:center;
      position:absolute;
      top:50%;
      left:0px;
      transform:translate(100%, -100%) rotate(90deg);
      width:45px;
      height:45px;
      color:black;
      background:white;
      padding:12px;
      opacity:0.5;
      border-radius:50%;
      z-index: 999 ;
      cursor:pointer;
      :hover{
           opacity:0.97;
      }
& path{
     fill:#0d263b;
}
`;
Icon.Right = styled(arrow)`
      display:flex;
      justify-content:center;
      align-items:center;
      position:absolute;
      top:50%;
      right:0px;
      transform:translate(-100%, -50%) rotate(-90deg);
      width:45px;
      height:45px;
      color:black;
      background:white;
      padding:12px;
      opacity:0.5;
      border-radius:50%;
      z-index: 999 ;
      cursor:pointer;
      :hover{
           opacity:0.97;
      }
& path{
     fill:#0d263b;
}

`;

const Opacity = styled.div`
     background:black;
     position:absolute;
     width:100%;
     height:100%;
     opacity:0.5;
`;
export  { Container,Img,Icon,Wrapper,Opacity};