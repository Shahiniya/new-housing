import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

`;
const Wrapper = styled.div`
   display:flex;
   max-width:1440px;
   /* flex-direction:column; */
   flex-wrap: wrap;
   gap:20px;
   padding:0 130px;

`;
const Total = styled.div`
    margin:70px 0 16px 0;
    max-width:1440px;
    text-align:start;
    width:100%;
   padding:0 130px;

`;
export {Container,Total,Wrapper}