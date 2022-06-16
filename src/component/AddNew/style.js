import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    margin:32px, 130px;
    flex-direction:column;
`;
const Section = styled.div`
    display:flex;
    /* flex-direction:column; */
    width:100%;
    background:#ffffff;
    border:1px solid #e6e9ec;
    box-shadow:0 10px 30px rgba(13,38,59,0.05);
    border-radius:3px;
    padding:24px 30px;
    margin-top:32px;
`;
const Wrapper = styled.div`
    display:flex;
    width:100%;
    margin-top: 35px;
    gap:10px;

`;
export {Container,Wrapper,Section}