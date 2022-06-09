import styled from 'styled-components';
// import { ReactComponent as bed } from '../../assets/icon/bed.svg';
import { ReactComponent as homes } from '../../assets/icon/homes.svg';
// import { ReactComponent as price } from '../../assets/icon/price.svg';
import { ReactComponent as advanced } from '../../assets/icon/setting.svg';
import { ReactComponent as search } from '../../assets/icon/search.svg';


const Container = styled.div`
     display:flex;
     justify-content:center;
     margin: 10px 0 ;
     width:100%;
     padding:0 130px;
`;

const Wrapper = styled.div`
     display:flex;
     width:1440px;
`;
const Icon = styled.div``;
Icon.Home = styled(homes)`
    margin-right:8px;
    margin-top:6px;
`;
Icon.Setting = styled(advanced)`
    margin-right:8px;
`;
Icon.Search = styled(search)`
    margin-right:8px;
`;
const Advanced = styled.div`
   width:fit-content;
    height:fit-content;
    border-radius:5px;
    padding:10px;
    /* background:red; */
`;
Advanced.Title = styled.div`
   font-family:'MontSerrat';
   font-style:normal;
   font-weight:600;
   font-size:10px;
   line-height:24px;
   color:#bd263b;
`;
const Section = styled.div`
    display:flex;
    margin-bottom:15px;
    justify-content:flex-end;
    gap:20px;
`;

export  { Container,Wrapper,Icon,Advanced,Section};