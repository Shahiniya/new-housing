import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import {
  Container,
  Cards,
  ArrowLeft,
  Wrapper,
  ArrowRight,
  CategoryWrapper,
  Img,
  Details,
} from "./style";
import uy from "../../../assets/image/uy1.png";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../../hooks/usehttp";

const Categoric = () => {
  const Category = ({ category }) => (
    <CategoryWrapper
      onClick={() => navigate(`/properties?category_id=${category?.id}`)}
    >
      <Img src={uy} alt="sa" />
      <Details>{category?.name}</Details>
    </CategoryWrapper>
  );

  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const slider = useRef();

  const { request } = useHttp();

  useQuery(
    "",
    () =>
      request({
        url: "/v1/categories/list",
      }),
    {
      onSuccess: (res) => {
        if (res?.data) setList(res?.data || []);
      },
    }
  );

  return (
    <Container>
      <div className="title center">Category</div>
      <div className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={[
              ...list.map((item, i) => <Category category={item} key={i} />),
            ]}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};
export default Categoric;
