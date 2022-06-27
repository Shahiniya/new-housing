import React, { useState } from "react";
import { Button, Input } from "../Generic";
import { Container, Icon, Wrapper } from "./style";
import { Popover } from "antd";
import UseSearch from "../../hooks/useSearch";
import { useQuery } from "react-query";
import { useHttp } from "../../hooks/usehttp";
import AdvancedSearch from "./AdvancedSearch";

export const Filter = () => {
  const query = UseSearch();

  const [state, setState] = useState({
    country: query.get("country"),
    region: query.get("region"),
    city: query.get("city"),
    zip_code: query.get("zip_code"),
    room: query.get("room"),
    size: query.get("size"),
    sort: query.get("sort"),
    min_price: query.get("min_price"),
    max_price: query.get("max_price"),
  });

  const [list, setList] = useState([]);

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
      <Wrapper>
        <Input
          pl="42px"
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={
            <AdvancedSearch
              state={state}
              setState={setState}
              list={list}
              query={query}
            />
          }
          trigger="click"
        >
          <Button width="131px" ml={20} type="secondary">
            <Icon.Advanced />
            Advanced
          </Button>
        </Popover>
        <Button width="131px" ml={20} type="primary">
          <Icon.Search />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};
export default Filter;
