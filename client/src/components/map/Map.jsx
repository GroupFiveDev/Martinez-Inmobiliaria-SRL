import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import vaca from '../../assets/icons/silueta-de-vaca24.webp'
import vaca2 from '../../assets/icons/silueta-de-vaca24-v2.webp'
import edificio from '../../assets/icons/edificio.webp'
import edificio2 from '../../assets/icons/edificio-v2.webp'
import bathroom from "../../assets/icons/bathrooms.webp";
import room from "../../assets/icons/rooms.webp";
import squareIc from "../../assets/icons/squareic.webp";
import garaje from "../../assets/icons/garaje.webp";
import { useLocation } from 'react-router-dom';
import apiService from "../../services/apiService";


export default function Map({ zoom = 9, center2, id }) {

  const { pathname } = useLocation()
  const [properties, setProperties] = useState()
  const [popUpBool, setPopUpBool] = useState(false)
  const [property, setProperty] = useState()

  const containerStyle = {
    width: '100%',
    height: '100vh'
  };

  let center = useMemo(() => ({
    lat: -33.897129,
    lng: -61.099456
  }), [])

  const handleOnClick = (e) => {
    setPopUpBool(true)
    setProperty(e)
  }

  const seeProperty = () => {
    return window.location.assign(`/card/${property?.id}`)
  }

  useEffect(() => {
    (async function () {
      const propertiesDB = await apiService.getProperties();
      setProperties(propertiesDB.data.filter(e => e.archived === false));
    })();
  }, []);

  const OPTIONS = {
    minZoom: 4,
    maxZoom: 18,
    mapTypeId: 'terrain',
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: true,
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
    ]
  }

  return (
    <>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_API_GOOGLE_KEY}
      >
        <GoogleMap
          id="map"
          className="relative"
          mapContainerStyle={containerStyle}
          center={center2 ? center2 : center}
          zoom={zoom}
          options={OPTIONS}
        >
          {
            properties?.length ? properties.map((e, i) => <Marker
              key={i}
              onClick={() => handleOnClick(e)}
              position={e.position}
              icon={
                property ? { url: e.type === "field" && e.id === property.id ? vaca2 : e.type === "field" ? vaca : e.id === property.id ? edificio2 : edificio, rotation: 90 }
                  : { url: e.type === "field" && e.id === id ? vaca2 : e.type === "field" ? vaca : e.id === id ? edificio2 : edificio, rotation: 90 }
              }
            />)
              : ""
          }

          <Marker
            position={{
              lat: -33.89538827181515,
              lng: -61.09964234635147
            }}
          />

          <div className={`${popUpBool ? "absolute" : "hidden"} w-full sm:w-[400px] ${pathname === "/Mapa" ? "bottom-[5%] right-[5%]" : "bottom-0 right-0"}`}>
            <div className='w-full h-full relative bg-white flex flex-col items-center'>
              <div className='w-full flex justify-between px-4'>
                <h1 className='font-Montserrat'>{property?.title}</h1>
                <button onClick={() => { setPopUpBool(false); setProperty(null) }} className='text-xl text-black font-Montserrat'> X </button>
              </div>
              <img src={property?.images[0]} alt="iamge" className='w-full h-auto' />
              <div>
                {property?.type === "field" ? (
                  <div className="text-black flex flex-col">
                    <div className={`${property?.hectares ? "" : "hidden"} gap-2 flex items-center font-bold text-black`}>
                      HECTÁREAS:
                      <div >
                        {property?.hectares}
                      </div>
                    </div>
                    <div className={`${property?.terrain ? "" : "hidden"} gap-2 flex items-center font-bold text-black`} >
                      APTITUD:
                      <div >
                        {property?.terrain}
                      </div>
                    </div>
                  </div>
                ) :
                  <div className={`flex flex-wrap justify-center items-center gap-5"} my-4`}>
                    <div className={`${property?.rooms ? "" : "hidden"} mr-2  flex items-center font-bold text-black`}>
                      <img src={room} alt="romm" className="w-7" />
                      <span>
                        {property?.rooms}
                      </span>
                    </div>
                    <div className={`${property?.bathrooms ? "" : "hidden"} mr-2 text-black flex items-center font-bold`}>
                      <img src={bathroom} alt="romm" className="w-7" />
                      <span>
                        {property?.bathrooms}
                      </span>
                    </div>
                    <div className={`${property?.garage ? "flex" : "hidden"} mr-2  text-black items-center font-bold`}>
                      <img src={garaje} alt="romm" className="w-7" />
                      <span>
                        {property?.garage}
                      </span>
                    </div>
                    <div className={`${property?.square ? "" : "hidden"} text-black flex items-center font-bold`}>
                      <img src={squareIc} alt="romm" className="w-7" />
                      <span>
                        {property?.square}
                      </span>
                    </div>
                  </div>
                }
                <div className={`${property?.location ? "flex" : "hidden"}text-black flex flex-wrap items-center gap-2`} >
                  <div className={`gap-2 flex font-bold text-black items-center text-center flex-wrap`} >
                    UBICACIÓN:
                    <div>
                      {property?.location}
                    </div>
                  </div>
                </div>
                <div className={`${property?.price ? "" : "hidden"} gap-2 flex items-center font-bold text-black mb-3`} >
                  $
                  <div>
                    {property?.price}
                  </div>
                </div>
                <div className='w-full flex justify-center items-center mb-4'>
                  <button className='font-Montserrat' onClick={() => seeProperty()}> Ver propiedad </button>
                </div>
              </div>
            </div>
          </div>
        </GoogleMap >
      </LoadScript >
    </>
  )
}

