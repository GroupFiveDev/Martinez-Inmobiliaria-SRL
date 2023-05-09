import axios from "axios";
import { Link } from "react-router-dom";
import trash from "../../assets/icons/trash.png";
import room from "../../assets/icons/rooms.png";
import bathroom from "../../assets/icons/bathrooms.png";
import { useState } from "react";
import { useAuth } from '../../context/authContext'

export default function Card2({
  id,
  type,
  titulo,
  descripcion,
  hectareas,
  rooms,
  bathrooms,
  ubicacion,
  terrain,
  price,
  images,
  archived,
  sold,
  boolean,
  setBoolean,
}) {
  const [loading, setLoading] = useState(0);
  const { user } = useAuth()

  async function deleteProperty() {
    setLoading(1);
    await axios.delete(`/properties/${id}`);
    setBoolean(!boolean);
    setLoading(0);
  }

  async function handleArchived() {
    await axios.patch(`/properties/${id}`, { archived: !archived });
    setBoolean(!boolean);
  }

  async function handleSold() {
    await axios.patch(`/properties/${id}`, { sold: !sold });
    setBoolean(!boolean);
  }

  return (
    <>
      <Link to={`/card/${id}`}>
        <div class="relative p-10 flex justify-center items-center">
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
          <div class="w-full lg:max-w-full lg:flex">
            <img
              className={`h-auto lg:h-auto lg:w-auto w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden${sold || archived ? "blur-sm" : ""}`}
              src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"
              title=""
            />
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#368b8c26] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">{titulo}</div>
                <p class="text-gray-700 text-base">{descripcion}</p>
                {
                  type === "field" ?
                    <>
                      <p class="text-gray-700 text-base">HECTÁREAS: {hectareas}</p>
                      <p class="text-gray-700 text-base">Aptitud: {terrain}</p>
                    </>
                    :
                    <>
                      <div className='flex gap-5'>
                        <p className="mb-3 text-gray-700 dark:text-gray-400 flex items-end gap-1 font-bold">
                          <img src={room} alt="romm" className='w-7' />
                          <p>
                            {rooms}
                          </p>
                        </p>
                        <p className="mb-3 text-gray-700 dark:text-gray-400 flex items-end gap-1 font-bold">
                          <img src={bathroom} alt="romm" className='w-7' />
                          <p>
                            {bathrooms}
                          </p>
                        </p>
                      </div>
                    </>
                }
                <p class="text-gray-700 text-base">Ubicación: {ubicacion}</p>
                <p class="text-gray-700 text-base">$ {price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
