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
                width:'170px',
            }
        default :
            return {
                border:'1px solid #e6e9ec',
                color:'#ffffff',
            }
    }
}

const Container = styled.div`
display:flex;
font-family:'Montserrat';
font-style:normal;
font-weight:400;
line-height:20px;
justify-content:center;
align-items:center;
height: ${({height})=> height || '44px'};
min-width: ${({ width }) => (width ? width :  '100% ')};
border-radius:2px;
margin-right: ${({ mr }) => `${mr}px`};
margin-left: ${({ ml }) => `${ml}px`};
margin-top: ${({ mt }) => `${mt}px`};
margin-bottom: ${({ mb }) => `${mb}px`};
cursor:pointer;

-webkit-touch-callout:none; //IOS Safari;
-webkit-user-select:none;//Safari;
-khtml-user-select:none;//Konqueror HTML;
-moz-user-select:none;//old version of firefox;
-ms-user-select:none;//Internet Explorer/edge;
user-select:none;//non-prefixed version, cuurrently supported by chrome;
${({ type }) => getType(type)}
:active{
    transform:scale(0.98);
    opacity:0.7;
}


`;

export { Container};