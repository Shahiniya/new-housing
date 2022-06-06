import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import {ReactComponent as arrow} from '../../../assets/icon/arrow.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95px;
 
`;

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 0 130px;
`;
const Cards = styled("div")`
  display: flex;
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: none;
  }
  width: 1440px;
  margin-top: 32px;
  justify-content: space-between;
`;

const ArrowLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -100%);
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  opacity: 0.5;
  padding-left: 10px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;

const ArrowRight = styled(ArrowLeft)`
  left: 20px;
  transform: translate(50%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;
const CategoryWrapper = styled.div`
  display: flex;
  position: relative;
  width: 280px;
  max-width: 280px;
  height: 350px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(.jpg);
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  cursor: pointer;
  `;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

const Img = styled.img`
  width: 280px;
  height: 350px;
  border-radius:5px;
  /* margin-left:20px; */
`;

export {
  Container,
  Cards,
  ArrowLeft,
  Wrapper,
  ArrowRight,
  CategoryWrapper,
  Details,
  Img,
};