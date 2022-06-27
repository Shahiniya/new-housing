import styled from "styled-components";
// import { ReactComponent as bed } from '../../assets/icon/bed.svg';
import { ReactComponent as homes } from "../../assets/icon/homes.svg";
// import { ReactComponent as price } from '../../assets/icon/price.svg';
import { ReactComponent as advanced } from "../../assets/icon/setting.svg";
import { ReactComponent as search } from "../../assets/icon/search.svg";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  padding: 0 130px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 1440px;
`;
const Icon = styled.div``;

Icon.Home = styled(homes)`
  margin-right: 8px;
  margin-top: 6px;
`;
Icon.Search = styled(search)`
  margin-right: 8px;
`;
Icon.Advanced = styled(advanced)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  padding: 10px;
`;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  gap: 20px;
`;

const Inputs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: flex-end;
  .ant-select-selector {
    height: 45px !important;
    display: flex;
    align-items: center;
  }
  .ant-select-selection-item {
    width: 120px;
  }
  .ant-select-arrow {
    margin: 0;
    transform: translate(-50%, -50%);
  }
`;

export { Container, Wrapper, Icon, Advanced, Section, Inputs };
