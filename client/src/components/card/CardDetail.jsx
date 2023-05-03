import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instagram from "../contact/contacInfo/Instagram";
import Phone from "../contact/contacInfo/Phone";
import WhatsApp from "../contact/contacInfo/WhatsApp";
import axios from "axios";

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
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="flex flex-col md:flex-row md:items-center bg-[#51535b] h-full relative">
        <div className="md:w-1/2 lg:w-2/3 p-10">
          <h1 className="text-3xl font-bold mb-2 text-center ">
            {field?.title}
          </h1>
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
                  className={`w-full object-cover rounded-lg shadow-lg ${
                    index === activeImageIndex ? "border-2 border-blue-500" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 px-4">
          <div className="absolute top-0 left-0 hidden lg:flex w-52 h-20 z-40 rallado"></div>
          <div className="absolute bottom-0 right-0 hidden h-full lg:flex w-24 z-40 rallado"></div>
          <p className="text-lg mb-4">{field?.description}</p>
          <div className="mb-4">
            <span className="font-bold mr-2">HECTÁREAS:</span>
            <span>{field?.hectares}</span>
          </div>
          <div className="mb-4">
            <span className=" mr-2 text-white">LOTES:</span>
            <span className="text-white">{field?.lots}</span>
          </div>
          <div className="mb-4">
            <span className="font-bold mr-2">UBICACIÓN:</span>
            <span>{field?.location}</span>
          </div>
          <div className="mb-4">
            <span className="font-bold mr-2">APTITUD:</span>
            <span>{field?.terrain}</span>
          </div>
          <div className="mb-4">
            <span className="font-bold mr-2">$ </span>
            <span>{field?.price}</span>
          </div>
        </div>
      </div>
      <div className="bg-[#368a8c] px-5">
        <WhatsApp />
        <Phone />
        <Instagram />
      </div>
    </div>
  );
}
//   return (
//     <>
//       <div className="m-20">
//         <h5 className="bg-[#368a8c] mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{field?.title}</h5>
//         <div className="flex flex-wrap">
//           <div>
//             <div id="default-carousel" className="relative" data-carousel="slide">

//               <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img className="rounded-t-lg" src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg" alt="" />
//                 </div>

//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>

//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>

//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>

//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                   <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                 </div>
//               </div>

//               <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//               </div>

//               <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                 <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//                   <span className="sr-only">Previous</span>
//                 </span>
//               </button>
//               <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                 <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//                   <span className="sr-only">Next</span>
//                 </span>
//               </button>
//             </div>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">HECTÁREAS: {field?.hectares}</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aptitud: {field?.terrain}</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ubicación: {field?.location}</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{field?.description}</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {field?.price}</p>
//           </div>
//           <div className="m-3">
//             <h2>Contacto</h2>
//           </div>
//         </div>
//         <div>
//           <h1>MAPA</h1>
//         </div>
//       </div>
//     </>
//   );
// }

// const fieldsDetail = ({ fields }) => {
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   const handleImageClick = (index) => {
//     setActiveImageIndex(index);
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:items-center">
//       <div className="md:w-1/2 lg:w-1/3">
//         <img src={fields.images[activeImageIndex]} alt={fields.name} className="w-full object-cover rounded-lg shadow-lg" />
//         <div className="mt-4 grid grid-cols-3 gap-4">
//           {fields.images.map((image, index) => (
//             <button key={index} onClick={() => handleImageClick(index)}>
//               <img src={image} alt={fields.name} className={`w-full object-cover rounded-lg shadow-lg ${index === activeImageIndex ? 'border-2 border-blue-500' : ''}`} />
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="md:w-1/2 lg:w-2/3 px-4">
//         <h1 className="text-3xl font-bold mb-2">{fields.name}</h1>
//         <p className="text-lg mb-4">{fields.description}</p>
//         <div className="mb-4">
//           <span className="font-bold mr-2">Price:</span>
//           <span>{fields.price}</span>
//         </div>
//         <div className="mb-4">
//           <span className="font-bold mr-2">Brand:</span>
//           <span>{fields.brand}</span>
//         </div>
//         <div className="mb-4">
//           <span className="font-bold mr-2">Color:</span>
//           <span>{fields.color}</span>
//         </div>
//         <div className="mb-4">
//           <span className="font-bold mr-2">Size:</span>
//           <span>{fields.size}</span>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default fieldsDetail;
