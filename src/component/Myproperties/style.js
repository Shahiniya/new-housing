import styled from 'styled-components';
import {ReactComponent as trash} from '../../assets/icon/trash.svg';
import {ReactComponent as edit} from '../../assets/icon/edit.svg';

const Container = styled.div`
    display:flex;
    /* flex-direction:column; */
    justify-content:space-evenly;
`;
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:1440px;
    justify-content:space-evenly;
    margin:0 130px;
    margin-top:34px;

`;
const Section = styled.div`
    display:flex;
    /* flex-direction:column; */
    justify-content:space-between;
    margin-bottom:34px;  
    /* width:100%; */
    
`;

const Table = styled.div`
    /* border:none; */
      width:1300px;

`;
const Th = styled.th`
border:1px solid black;
/* background-color:red; */
width:300px;
font-size:22px;
font-weight:500;
/* width:100%; */
      
`;

const Td = styled.td`
border:1px solid black;
 text-align:center;
 font-size:18px; 
`;

const Tr = styled.tr`
  margin:5px ;
  height:113px;
  /* width:130px; */
`;
const Icons = styled.div`
    cursor:pointer;
`;

 Icons.Edit = styled(edit)`
    cursor:pointer;
 
`;
 Icons.Trash = styled(trash)`
    cursor:pointer;

`;
export {Container,Th,Tr,Td,Table,Wrapper,Section,Icons}