import React, { useState } from "react";
import { Container, Section, Wrapper } from "./style";
import { Input, Button } from "../Generic";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useHttp } from "../../hooks/usehttp";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

export const AddNew = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { request } = useHttp();

  useQuery('getSingle Item', ()=>{
   return id && request({url:`/v1/houses/${id}`, token:true})
   ,{
    onSuccess:(res)=>{
      console.log(res,'res')
      setData(res?.data)
    }}
  })

  const navigate = useNavigate();
  const [center, setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });

  const containerStyle = {
    width: "100%",
    height: "600px",
  };
  // const center = {
  //   lat: state?.location?.latitude,
  //   lng: state?.location?.longitude
  // };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const onMapClick = (e) => {
    console.log(e?.latLng?.lat(), "lat");
    console.log(e?.latLng?.lng(), "lng");

    setCenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
    });
  };
  const { mutate } = useMutation(() =>
    request({
      url: "/v1/houses",
      method: "POST",
      token: true,
      body: {
        address: "",
        attachments: [
          {
            imgPath: "",
          },
        ],
        categoryId: 0,
        city: " ",
        componentsDto: {
          additional: "string",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        country: "",
        description: "",
        favorite: true,
        homeAmenitiesDto: {
          additional: "string",
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        houseDetails: {
          area: 10,
          bath: 20,
          beds: 10,
          garage: 10,
          room: 10,
          yearBuilt: 1110,
        },
        locations: {
          latitude: center?.lat,
          longitude: 0,
        },
        name: "string",
        price: 0,
        region: "Tash city",
        salePrice: 0,
        status: true,
        zipCode: "123654789",
      },
    })
  );

  const { mutate: update } = useMutation((id) => {
    return (
      id &&
      request({
        url: `/v1/houses${id}`,
        method: "PUT",
        token: true,
        body: data,
      })
    );
  });

  const onSubmit = () => {
    if (id) {
      update(id, {
        onSuccess: (res) => {
          if (res?.success) {
            message.info("updated");
            navigate(`/myproperties`);
          }
        },
      });
    } else {
      mutate("", {
        onSuccess: (res) => {
          console.log(res);
          if (res?.success) {
            navigate("/myproperties");
          }
        },
      });
    }
  };

  const onChange = ({ target: name, value }) => {
    setData({ ...data, [name]: value });
  };
  return (
    <Container>
      <Section>
        <div className="subtitle">Contact Information</div>
        <Wrapper>
          <Input
            name="address"
            onChange={onChange}
            value={data?.address}
            placeholder={"Property Title"}
          />
          <Input placeholder={"Category"} />
        </Wrapper>
        <Wrapper>
          <Input placeholder={"Property Description"} />
        </Wrapper>
      </Section>
      <Section>
        <div className="subtitle">Additional</div>
        <Wrapper>
          <Input value={data?.houseDetails?.bath} placeholder={"bath"} />
          <Input value={data?.houseDetails?.bed} placeholder={"bed"} />
          <Input value={data?.houseDetails?.garage} placeholder={"garage"} />
        </Wrapper>
        <Wrapper>
          <Input placeholder={"Year build"} />
          <Input placeholder={"Home area"} />
          <Input placeholder={"Rooms"} />
        </Wrapper>
      </Section>
      <Section>
        <div className="subtitle">Price</div>
        <Wrapper>
          <Input placeholder={"Price"} />
          <Input placeholder={"Sale Price"} />
        </Wrapper>
      </Section>

      <Section>
        <div className="subtitle">Location</div>
        <Wrapper>
          <Input placeholder={"Region"} />
          <Input placeholder={"Friendly Address"} />
        </Wrapper>
        <Wrapper>
          {" "}
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={onMapClick}
            >
              <Marker position={center}></Marker>
              <></>
            </GoogleMap>
          )}
        </Wrapper>
      </Section>
      <Button onClick={onSubmit} type={"primary"} mt={"10"} width={"120px"}>
        Submit
      </Button>
    </Container>
  );
};
export default AddNew;
