import React, { useState } from "react";
import Filter from "../Filter";
import { Container, Total, Wrapper } from "./style";
import { Card } from "../Card";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/usehttp";

export const Properties = () => {
  const naviget = useNavigate();

  const [data, setData] = useState([]);
  const { search } = useLocation();
  const { request } = useHttp();

  useQuery(
    ["get data", search],
    () => request({ url: `/v1/houses/list/${search}` }),

    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );

  const onSelect = (id) => {
    naviget(`/properties:${id}`);
  };

  return (
    <Container>
      <Filter />
      <div className="title">Properties</div>
      <div className="discription center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Total className="description">{data?.length}Total</Total>
      <Wrapper>
        {data?.map((value, i) => {
          return (
            <Card key={i} onClick={() => onSelect(value.id)} info={value} />
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Properties;
