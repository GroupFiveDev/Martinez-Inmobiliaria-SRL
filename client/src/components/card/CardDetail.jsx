import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instagram from "../contact/contacInfo/Instagram";
import Phone from "../contact/contacInfo/Phone";
import WhatsApp from "../contact/contacInfo/WhatsApp";
import axios from "axios";
import Location from '../contact/contacInfo/Location'

export default function CardDetail() {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [field, setField] = useState();

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  useEffect(() => {
    (async function () {
      const result = await axios.get(`/fields/${id}`);
      setField(result.data);
    })();
  }, []);

  return (
    <>
      <div className="bg-[#51535b] py-5 flex flex-col md:flex-row">
        <div className="xl:mx-[20%] md:mx-[10%] flex flex-col">

          {/* titulo */}
          <div className="bg-[#368a8c] mb-5">
            <h1 className="text-3xl text-start ml-3 font-bold text-white">
              {field?.title}
            </h1>
          </div>

          {/* imagen */}
          <div className="px-2 md:w-2/3">
            <img
              src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"
              alt={field?.title}
              className="w-full object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 grid grid-cols-3 gap-4">
              {field?.images.map((image, index) => (
                <button key={index} onClick={() => handleImageClick(index)}>
                  <img
                    src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"
                    alt={field?.title}
                    className={`w-full object-cover rounded-lg shadow-lg ${index === activeImageIndex ? "border-2 border-blue-500" : ""
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* detalles */}
          <div className="md:w-1/2 lg:w-1/2 px-4 flex justify-start flex-col items-start w-full text-white">
            <p className="text-lg mb-4">{field?.description}</p>
            <div className="mb-4 text-white">
              <span className="font-bold">HECTÁREAS:</span>
              <span>{field?.hectares}</span>
            </div>
            <div className="mb-4 text-white">
              <span>LOTES:</span>
              <span>{field?.lots}</span>
            </div>
            <div className="mb-4 text-white">
              <span className="font-bold">UBICACIÓN:</span>
              <span>{field?.location}</span>
            </div>
            <div className="mb-4 text-white">
              <span className="font-bold">APTITUD:</span>
              <span>{field?.terrain}</span>
            </div>
            <div className="mb-4 text-white">
              <span className="font-bold">$ </span>
              <span>{field?.price}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit mr-10">
          <WhatsApp />
          <Location />
          <Phone />
        </div>
      </div>
    </>
  );
}


{/* <div className="w-full">
       
        <div className="flex flex-col">
 
          </div>
          
          <div className="flex flex-col justify-center items-center py-5">
           
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="hidden lg:flex w-52 h-20 z-40 rallado"></div>
        </div>
      </div> */}
