import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Phone from "../contact/contacInfo/Phone";
import WhatsApp from "../contact/contacInfo/WhatsApp";
import axios from "axios";
import Location from '../contact/contacInfo/Location'
import bathroom from '../../assets/icons/bathrooms.png'
import room from '../../assets/icons/rooms.png'
import squareIc from '../../assets/icons/squareIc.png'
import garaje from '../../assets/icons/garaje.png'

export default function CardDetail() {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [property, setProperty] = useState();

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  useEffect(() => {
    (async function () {
      const result = await axios.get(`/properties/${id}`);
      setProperty(result.data);
    })();
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  return (
    <>
      <div className="bg-[#51535b] pt-5 flex flex-col md:flex-row w-full justify-center items-center relative">
        <div className="absolute bottom-0 left-0 hidden h-full xl:flex w-24 z-40 rallado" />
        <div className="xl:w-[50%] flex flex-col">

          {/* titulo */}
          <div className="bg-[#368a8c] mb-5">
            <h1 className="text-3xl text-start ml-3 font-bold text-white font-Montserrat">
              {property?.title}
            </h1>
          </div>

          {/* imagen */}
          <div className="px-2 md:w-2/3 xl:w-full">
            <img
              src={id == 1 ? property?.images[activeImageIndex] : "https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"}
              alt={property?.title}
              className="w-full object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 grid grid-cols-3 gap-4">
              {property?.images.map((image, index) => (
                <button key={index} onClick={() => handleImageClick(index)}>
                  <img
                    src={id == 1 ? image : "https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"}
                    alt={property?.title}
                    className={`w-full object-cover rounded-lg shadow-lg ${index === activeImageIndex ? "border-2 border-blue-500" : ""}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* detalles */}
          <div className="md:w-1/2 lg:w-1/2 px-4 flex justify-start flex-col items-start w-full text-white mt-4 mb-4 gap-4">
            <p className="text-xl mb-4">{property?.description}</p>
            <div className="text-white">
              {
                property?.type === "field" ?
                  <>
                    <div className="text-white flex flex-col gap-4">
                      <span><span className={`${property?.hectareas ? "" : "hidden"}font-bold`}>HECTÁREAS: </span> {property?.hectares}</span>
                      <span><span className={`${property?.terrain ? "" : "hidden"}font-bold`}>APTITUD: </span> {property?.terrain}</span>
                    </div>
                  </>
                  :
                  <>
                    <div className='flex gap-5'>
                      <p className={`${property?.rooms ? "" : "hidden"}mb-3 dark:text-gray-400 flex items-end gap-1 font-bold text-white`}>
                        <img src={room} alt="romm" className='w-7' />
                        {property?.rooms}
                      </p>
                      <p className={`${property?.bathrooms ? "" : "hidden"}mb-3 text-white dark:text-gray-400 flex items-end gap-1 font-bold`}>
                        <img src={bathroom} alt="romm" className='w-7' />
                        {property?.bathrooms}
                      </p>
                      <p className={`${property?.garage ? "" : "hidden"}mb-3 text-white dark:text-gray-400 flex items-end font-bold`}>
                        <img src={squareIc} alt="romm" className='w-7' />
                        {property?.square}
                      </p>
                    </div>
                  </>
              }
            </div>
            <div className={`${property?.location ? "flex" : "hidden"}text-white flex gap-2`}>
              <span className="font-bold">UBICACIÓN:</span>
              <span>{property?.location}</span>
            </div>
            <div className={`${property?.price ? "" : "flex"} text-white font-bold`}>
              <span>$ {property?.price}</span>
            </div>
          </div >
        </div >
        {/* redes */}
        <div className="md:absolute right-0 top-0 h-full flex flex-col justify-center w-full md:w-fit" >
          <h1 className="text-center mb-4 font-Montserrat text-white text-3xl">Contacto</h1>
          <WhatsApp />
          <Location />
          <Phone />
          <hr className="flex md:hidden" />
        </div>
      </div>
    </>
  );
}

