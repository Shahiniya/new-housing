import styled from 'styled-components';

const getType = (type) =>{
    switch (type) {
        case 'secondary':
            return {
                border:'1px solid #e6e9ec',
                color:'#0D263B',
            }
        case 'primary' :
            return {
                background:'#0061df',
                color:'#ffffff',
                border:'none',
            }
        default :
            return {
                border:'1px solid #e6e9ec',
                color:'#ffffff',
            }
    }
}
const Container = styled.input`
display:flex;
font-style:normal;
font-weight:400;
font-size:14px;
line-height:20px;
color:#0d263b;
height: ${({height})=> height || '44px'};
width: ${({ width }) => (width ||  '100% ')};
padding-left: ${({pl}) => pl || '15px'};
border-radius:2px;
border:1px solid #e6e9ec; 
`;


const Wrapper = styled.div`
     display:flex;
     width:100%;
     position: relative;

     margin-right: ${({ mr }) => `${mr}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Icon = styled.div`
    position:absolute;
    transform: translate(-50%, -50%);
    top:50%;
    left:32px;
`;

export  { Container,Wrapper,Icon};