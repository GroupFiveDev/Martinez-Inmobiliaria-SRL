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

  async function deleteField() {
    setLoading(1);
    await axios.delete(`/fields/${id}`);
    setBoolean(!boolean);
    setLoading(0);
  }

  async function handleArchived() {
    await axios.patch(`/fields/${id}`, { archived: !archived });
    setBoolean(!boolean);
  }

  async function handleSold() {
    await axios.patch(`/fields/${id}`, { sold: !sold });
    setBoolean(!boolean);
  }

  return (
    <>
      <Link to={`/card/${id}`}>
        <div class="relative p-10">
          <div class="w-full lg:max-w-full lg:flex">
            <div className="left-10 ml-5 z-50 absolute top-10 flex justify-center items-center">
              <button
                onClick={() => deleteField()}
                type="button"
                className={`${user ? "flex" : "hidden"} text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-2`}
              >
                <img src={trash} className="w-5 h-5 mr-1" alt="deleted" />
                Eliminar
              </button>
              <button
                onClick={handleArchived}
                type="button"
                className={`${user ? "flex" : "hidden"} text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center ml-2 mb-2 mt-2`}
              >
                {archived ? "Desarchivar" : "Archivar"}
              </button>
            </div>
            <img
              className={`h-auto lg:h-auto lg:w-auto w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden${sold || archived ? "blur-sm" : ""}`}
              src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"
              title=""
            />
            <div className={`absolute bg-[#368b8cc1] w-full h-14 flex justify-center items-center ${sold ? "" : "hidden"}`} >
              <h1 className="text-white font-bold text-3xl font-Montserrat">
                VENDIDO
              </h1>
            </div>
            <div className={`absolute bg-[#000000c1] w-full h-14 flex bottom-5 justify-center items-center ${archived ? "" : "hidden"}`}>
              <h1 className="text-white font-bold text-3xl font-Montserrat">
                ARCHIVADO
              </h1>
            </div>
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
              <div className="w-full flex flex-col justify-center items-center z-50">
                <button
                  type="button"
                  className={`${user ? "flex" : "hidden"} z-50 bottom-0 w-[90%] text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 inline-flex justify-center items-center mb-2 mt-2`}
                >
                  Modificar
                </button>
                <button
                  onClick={handleSold}
                  type="button"
                  className={`${user ? "flex" : "hidden"} z-50 bottom-0 w-[90%] text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 inline-flex justify-center items-center mb-2 mt-2`}
                >
                  {sold ? "Quitar vendido" : "Poner como vendido"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
