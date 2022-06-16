import React, {useState} from 'react'
import { Container,Section,Wrapper  } from './style'
import { Input,Button } from '../Generic';
import { GoogleMap, useJsApiLoader ,Marker} from '@react-google-maps/api';
import {useHttp} from '../../hooks/usehttp';
import {useMutation} from 'react-query';
import { useNavigate } from 'react-router-dom';



export const AddNew = () => {
  const {request} = useHttp();
  const navigate = useNavigate();
  const [center,setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });

  const containerStyle = {
    width: '400px',
    height: '600px'
  };
  // const center = {
  //   lat: state?.location?.latitude,
  //   lng: state?.location?.longitude
  // };  
  
      const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
    })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
 const onMapClick = (e) => { 
   console.log(e?.latLng?.lat(), 'lat');
   console.log(e?.latLng?.lng(), 'lng');

    setCenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
 })
 };
  const {mutate} = useMutation(()=>
  request({url:'/v1/houses',
  method:'POST',token:true,
   body:{
    "address": "Webbrain online",
    "attachments": [
      {
        "imgPath": "https://assets.entrepreneur.com/content/3x2/2000/1591900317-GettyImages-1137516784.jpg"
      }
    ],
    "categoryId": 0,
    "city": "Earth",
    "componentsDto": {
      "additional": "string",
      "airCondition": true,
      "courtyard": true,
      "furniture": true,
      "gasStove": true,
      "internet": true,
      "tv": true
    },
    "country": "Uzbekistan",
    "description": "uyni biri",
    "favorite": true,
    "homeAmenitiesDto": {
      "additional": "string",
      "busStop": true,
      "garden": true,
      "market": true,
      "park": true,
      "parking": true,
      "school": true,
      "stadium": true,
      "subway": true,
      "superMarket": true
    },
    "houseDetails": {
      "area": 10,
      "bath": 20,
      "beds": 10,
      "garage": 10,
      "room": 10,
      "yearBuilt": 1110
    },
    "locations": {
      "latitude": center?.lat,
      "longitude": 0
    },
    "name": "string",
    "price": 0,
    "region": "Tash city",
    "salePrice": 0,
    "status": true,
    "zipCode": "123654789"
  }
}))
const onSubmit = () =>{
 mutate('',{
   onSuccess: (res) => {
     console.log(res);
     if(res?.success){
       navigate('/myproperties')
     }
   }
 })
}

  return (
    <Container>
      <Section>
        <div className='subtitle' >Contact Information</div>
        <Wrapper>
           <Input  placeholder={'Property Title'}  />
           <Input  placeholder={'Category'}  />
        </Wrapper>
        <Wrapper>
          <Input placeholder={'Property Description'}/>
        </Wrapper>
        </Section>
        <Section>
        <div className='subtitle' >Additional</div>
          <Wrapper>
          <Input placeholder={'bath'} />
          <Input placeholder={'bed'} />
          <Input placeholder={'garage'} />          
          </Wrapper>
          <Wrapper>
          <Input placeholder={'Year build'} />
          <Input placeholder={'Home area'} />
          <Input placeholder={'Rooms'} />          
          </Wrapper>
        </Section>
        <Section>
        <div className='subtitle' >Price</div>
          <Wrapper>
              <Input  placeholder={'Price'}/>
              <Input  placeholder={'Sale Price'}/>
          </Wrapper>
        </Section>

        <Section>
        <div className='subtitle' >Location</div>
        <Wrapper>
        <Input  placeholder={'Region'}/>
        <Input  placeholder={'Friendly Address'}/>
        </Wrapper>
        <Wrapper> {
          isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={onMapClick}
              >
              <Marker position={center} >
              </Marker>
              <></>
              </GoogleMap>
          )}       
          </Wrapper>
        </Section>
        <Button onClick={onSubmit} type={'primary'} mt={'10'} width={'120px'}>Submit</Button>
    </Container>
  )
}
export default AddNew;