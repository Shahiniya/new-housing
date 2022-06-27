import { Select } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseReplace } from "../../hooks/useReplace";
import { Button, Input } from "../Generic";
import { Advanced, Inputs } from "./style";

const AdvancedSearch = ({ state, setState, query, list }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
    navigate(`${pathname}${UseReplace(name, value)}`);
  };

  const onSelect = (value) => {
    setDef(value);
    navigate(`/properties?category_id=${value}`);
  };
  const [def, setDef] = useState(
    Number(query.get("category_id")) > 0
      ? Number(query.get("category_id"))
      : "Select Category"
  );
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
    navigate("/properties");
  };

  const { Option } = Select;
  return (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Inputs>
        <Input
          value={state.country}
          name={"country"}
          placeholder={"Country"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.region}
          name={"region"}
          placeholder={"Region"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.city}
          name={"city"}
          placeholder={"City"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.zip}
          name={"zip"}
          placeholder={"Zip"}
          pl={20}
          onChange={onChange}
        />
      </Inputs>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Inputs>
        <Input
          value={state.address}
          name={"address"}
          placeholder={"Address"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.house}
          name={"house"}
          placeholder={"House name"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.rooms}
          name={"rooms"}
          placeholder={"Rooms"}
          pl={20}
          onChange={onChange}
        />
      </Inputs>
      <Advanced.Title>Price</Advanced.Title>
      <Inputs>
        <Input
          value={state.min}
          name={"min"}
          placeholder={"Min price"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.max}
          name={"max"}
          placeholder={"Max price"}
          pl={20}
          onChange={onChange}
        />
        <Select value={def} onChange={onSelect}>
          {list.length > 0 &&
            list.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
        </Select>
      </Inputs>
      <Inputs>
        <Button width={"130px"} type={"secondary"}>
          Cancel
        </Button>
        <Button width={"130px"} type={"primary"} onClick={onClear}>
          Clear
        </Button>
      </Inputs>
    </Advanced>
  );
};

export default AdvancedSearch;
