import { Link } from "react-router-dom";
import room from "../../assets/icons/rooms.png";
import bathroom from "../../assets/icons/bathrooms.png";
import garaje from "../../assets/icons/garaje.png";

export default function Card2({ id, type, titulo, descripcion, hectareas, rooms, bathrooms, garage, square, ubicacion, terrain, price, images, archived, sold, }) {








  return (
    <>
      <Link to={`/card/${id}`}>
        <div className="relative p-10 flex justify-center items-center">
          <div className={`absolute bg-[#368b8cc1] w-[90%] h-14 flex justify-center items-center ${sold ? "" : "hidden"}`} >
            <h1 className="text-white font-bold text-3xl font-Montserrat">
              VENDIDO
            </h1>
          </div>
          <div className={`absolute bg-[#000000c1] w-[90%] h-14 flex bottom-5 justify-center items-center ${archived ? "" : "hidden"}`}>
            <h1 className="text-white font-bold text-3xl font-Montserrat">
              ARCHIVADO
            </h1>
          </div>
          <div className="w-full lg:max-w-full lg:flex">
            <img
              className={`h-auto md:w-[500px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden${sold || archived ? "blur-sm" : ""}`}
              src={id === 1 ? images[0] : "https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"}
              title=""
            />
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#368b8c26] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{titulo}</div>
                <p className="text-gray-700 text-base">{descripcion}</p>
                {
                  type === "field" ?
                    <>
                      <p className={`${hectareas ? "" : "hidden"} text-gray-700 text-base`}>HECTÁREAS: {hectareas}</p>
                      <p className={`${terrain ? "" : "hidden"} text-gray-700 text-base`}>Aptitud: {terrain}</p>
                    </>
                    :
                    <>
                      <div className='flex gap-5'>
                        <p className={`${rooms ? "" : "hidden"} mb-3 text-gray-700 dark:text-gray-400 flex items-end gap-1 font-bold`}>
                          <img src={room} alt="romm" className='w-7' />
                          {rooms}
                        </p>
                        <p className={`${bathrooms ? "" : "hidden"} mb-3 text-gray-700 dark:text-gray-400 flex items-end gap-1 font-bold`}>
                          <img src={bathroom} alt="romm" className='w-7' />
                          {bathrooms}
                        </p>
                        <p className={`${garage ? "" : "hidden"} mb-3 text-gray-700 dark:text-gray-400 flex items-end gap-1 font-bold`}>
                          <img src={garaje} alt="garage" className='w-7' />
                          {garage}
                        </p>
                      </div>
                    </>
                }
                <p className={`${ubicacion ? "flex" : "hidden"} text-gray-700 text-base`}>Ubicación: {ubicacion}</p>
                <p className={`${price ? "" : "flex"} text-gray-700 text-base`}>$ {price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
