import React, { useState } from "react";
import { Button, Input } from "../Generic";
import { Advanced, Container, Icon, Section, Wrapper } from "./style";
import { Popover } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import UseReplace from "../../hooks/useReplace";
import { useQuery } from "react-query";
import { useHttp } from "../../hooks/usehttp";

export const Filter = () => {
  const query = useSearch();
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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [list, setList] = useState([]);
  const [def, setDef] = useState(
    Number(query.get("category_id")) > 0
      ? Number(query.get("category_id"))
      : "Select Category"
  );
  const onChange = ({ target }) => {
    const { value, name } = target;
    // eslint-disable-next-line react-hooks/rules-of-hooks

    setState({ ...state, [name]: value });
    navigate(`${pathname}${UseReplace(name, value)}`);
  };
  const onClear = () => {
    setState({
      country: "",
      region: "",
      city: "",
      zip: "",
      address: "",
      house: "",
      rooms: "",
      minPrice: "",
      maxPrice: "",
    });
    setDef("Select Category");
    navigate(`/properties`);
    console.log(query.get("category_id"));
  };
  const onSelect = ({ target }) => {
    setDef(target);
    navigate(`/properties?category_id=${target}`);
  };
  const { request } = useHttp();
  useQuery(
    "",
    () =>
      request({
        url: "/v1/categories/list",
        // headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    {
      onSuccess: (res) => {
        if (res?.data) setList(res?.data || []);
      },
    }
  );

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="country"
          value={state.country}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          name="region"
          value={state.region}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          name="city"
          value={state.city}
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          name="zip_code"
          value={state.zip_code}
          placeholder={"Zip code"}
        />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="room"
          value={state.room}
          placeholder={"Rooms"}
        />
        <Input
          onChange={onChange}
          name="size"
          value={state.size}
          placeholder={"Size"}
        />
        <Input
          onChange={onChange}
          name="sort"
          value={state.sort}
          placeholder={"Sort"}
        />
      </Section>

      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input
          onChange={onChange}
          name="min_price"
          value={state.min_price}
          placeholder={"Min price"}
        />
        <Input
          onChange={onChange}
          name="max_price"
          value={state.max_price}
          placeholder={"Max price"}
        />
        <select value={def} onChange={onSelect}>
          {list.length > 0 &&
            list.map((item, i) => (
              <option key={i} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </Section>
      <Section>
        <Button onClick={onClear} width="131px" type="primary">
          Clear
        </Button>
      </Section>
    </Advanced>
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
          content={advancedSearch}
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
