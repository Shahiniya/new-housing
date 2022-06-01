import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import {ReactComponent as arrow} from '../../../assets/icon/arrow.svg'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:96px;
    /* background:red; */
    /* justify-content:center; */

`;
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    /* background:red; */
    padding: 0px 130px;
    margin-top:20px;
    position:relative;


`;
const Carousel = styled.div`
    width:1440px;
    display:flex;
    .alice-carousel__stage-item{
    width:400px!important;
     };
     .alice-carousel__prev-btn{
    display:none!important;
     };
`;
const Icon = styled.div`
`;
Icon.Left = styled(arrow)`
      display:flex;
      justify-content:center;
      align-items:center;
      position:absolute;
      top:50%;
      left:20px;
      transform:translate(100%, -100%) rotate(90deg);
      width:45px;
      height:45px;
      color:white;
      background:#e6e9ec;
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
      right:20px;
      transform:translate(-100%, -50%) rotate(-90deg);
      width:45px;
      height:45px;
      color:white;
      background:#e6e9ec;
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
const ACarousel = styled(AliceCarousel)`


`;

const CategoryWrapper = styled.div`
     display:flex;
     width:280px;
     height:350px;
     position:relative;
     /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(); */
/* XXL */

     box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
     border-radius: 3px;
     transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const Details = styled.div`
     display:flex;
     flex-direction:column;
`;

const Img = styled.img`
   width:280px;
   height:350px;
`;

export {Container,Details,
     CategoryWrapper,Wrapper,
     Icon,Carousel,ACarousel,Img}