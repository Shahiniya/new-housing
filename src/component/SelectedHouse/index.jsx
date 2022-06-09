import React,{useState} from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Container } from './style';
import { GoogleMap, useJsApiLoader ,Marker} from '@react-google-maps/api';
// import Filter from '../Filter';

const {REACT_APP_BASE_URL:url} = process.env

export const SelectedHouse = () => {

   const [state,setState] = useState({});
    const {id} = useParams();
    // const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds(center);
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])
    const containerStyle = {
      width: '1500px',
      height: '600px'
    };
    
    const center = {
      lat: state?.location?.latitude,
      lng: state?.location?.longitude
    };

  useQuery(
    'get data',
    ()=>{
      return fetch(`${url}/v1/houses/${id.replace(':','')}`,{
        method:'GET',
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        }).then((res)=> res.json())
    },
    {
      onSuccess: (res) =>{
        console.log(res, 'res');
        setState(res?.data)
      },
      keepPreviousData:true,
      refetchOnWindowFocus:false
    }
  )

       
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
    })
   console.log(id)
  return (
    <Container>
     {
    isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
        >
            {
               state?.location?.latitude && state?.location?.longitude ?  (
                   <>
                    <Marker position={center} />
                    <Marker position={{
                        lat: state?.location?.latitude + 1,
                        lng: state?.location?.longitude - 1,
                    }} />
                   </>
               ) : <GoogleMap mapContainerStyle={containerStyle}
                    center={{
                        lat: 41.311081,
                        lng:  69.240562,
                    }}
                    zoom={15} />
            }
          <></>
        </GoogleMap>
    ) : <></>
}
    </Container>
  )
}
export default SelectedHouse