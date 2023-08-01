import axios from 'axios';
import { Link } from 'react-router-dom';
import trash from '../../assets/icons/trash.webp'
import bathroom from '../../assets/icons/bathrooms.webp'
import room from '../../assets/icons/rooms.webp'
import garaje from '../../assets/icons/garaje.webp'
import squareIc from '../../assets/icons/squareIc.webp'
import vaca from '../../assets/icons/silueta-de-vaca.webp'
import maiz from '../../assets/icons/maiz.webp'
import { useState } from 'react';
import Modal from '../modal/Modal';
import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../context/authContext';

export default function Card({ id, type, titulo, descripcion, hectareas, rooms, bathrooms, garage, square, ubicacion, terrain, price, images, archived, sold, boolean, setBoolean }) {
  const [loading, setLoading] = useState(0)
  const { isOpen, openModal, closeModal } = useModal()
  const { user } = useAuth()

  async function deleted() {
    setLoading(1)
    await axios.delete(`/properties/${id}`)
    setBoolean(!boolean)
    setLoading(0)
    closeModal()
  }

  async function handleArchived() {
    setLoading(1)
    await axios.patch(`/properties/${id}`, { archived: !archived });
    setBoolean(!boolean);
    setLoading(0)
  }

  async function handleSold() {
    setLoading(1)
    await axios.patch(`/properties/${id}`, { sold: !sold });
    setBoolean(!boolean);
    setLoading(0)
  }

  return (
    <>
      {/* Modal de comfirmacion */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h1 className='p-5 text-white font-Montserrat'>Seguro que quieres eliminar esta propiedad?</h1>
        <div className='w-full flex justify-center items-end gap-5'>
          <button aria-label='accept' className="mb-3 md:my-0 w-fit text-center font-Montserrat bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:bg-green-500 block p-2.5" onClick={deleted}>
            Sí, eliminar.
          </button>

          <button aria-label="cancel" onClick={closeModal} className="mb-3 md:my-0 w-fit text-center font-Montserrat bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:bg-red-400 block p-2.5">
            Cancelar
          </button>
          <div className='w-full absolute top-0 left-0'>
            <div role="status" className={`${loading ? "" : "hidden"} flex m-2`}>
              <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#368a8c]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </Modal>
      {/* ************** */}
      <div className={`flex flex-col justify-between relative max-w-sm bg-[#368b8c26] border border-gray-200 rounded-lg shadow m-3 ${loading ? "opacity-50" : ""}`}>
        <div className='w-full absolute top-0 left-0 z-[100] flex justify-center'>
          <div role="status" className={`${loading ? "" : "hidden"} flex m-2`}>
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#368a8c]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <Link to={`/card/${id}`}>
          <div className="flex flex-col justify-center relative">
            <img
              className={`rounded-t-lg ${sold ? "blur-sm" : ""} h-[300px] w-full`}
              src={images?.length ? images[0] : ""}
              alt="Imagen_de_la_propiedad"
            />
            <div className={`absolute bg-[#368b8cc1] w-full h-14 flex justify-center items-center ${sold ? "" : "hidden"}`}>
              <h1 className="text-white font-bold text-3xl font-Montserrat">
                VENDIDO
              </h1>
            </div>
            <div className={`absolute bg-[#000000c1] w-full h-14 flex bottom-5 justify-center items-center ${archived ? "" : "hidden"}`}>
              <h1 className="text-white font-bold text-3xl font-Montserrat">
                ARCHIVADO
              </h1>
            </div>
          </div>
          <div className="p-5">
            <div className="px-5">
              <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {titulo}
              </h1>
              <p className="mb-3 font-normal text-gray-700">
                {descripcion?.length > 96 ? descripcion?.slice(0, 96).concat("...") : descripcion}
              </p>
              {
                type === "field" ?
                  <>
                    {
                      terrain?.toLowerCase() === "mixto" ?
                        <div className='flex gap-4'>
                          <img src={vaca} alt="vaca" className='w-7 h-7' />
                          <img src={maiz} alt="maiz" className='w-7 h-7' />
                        </div>
                        : terrain?.toLowerCase() === "ganadero" ?
                          <img src={vaca} alt="vaca" className='w-7 h-7' />
                          : terrain?.toLowerCase() === "Agrícola" ?
                            <img src={maiz} alt="maiz" className='w-7 h-7' />
                            : ""
                    }
                    <p className={`${hectareas ? "" : "hidden"} mb-3 mt-3 font-normal text-gray-700`}>
                      HECTÁREAS: {hectareas}
                    </p>
                    <p className={`${terrain ? "" : "hidden"} mb-3 font-normal text-gray-700`}>
                      Aptitud: {terrain}
                    </p>
                  </>
                  :
                  <div className='flex gap-5'>
                    <p className={`${rooms ? "" : "hidden"} mb-3 text-gray-700 flex items-end gap-4 font-bold`}>
                      <img src={room} alt="romm" className='w-7 h-7' />
                      {rooms}
                    </p>
                    <p className={`${bathrooms ? "" : "hidden"} mb-3 text-gray-700 flex items-end gap-4 font-bold`}>
                      <img src={bathroom} alt="romm" className='w-7 h-7' />
                      {bathrooms}
                    </p>
                    <p className={`${garage ? "" : "hidden"} mb-3 text-gray-700 flex items-end gap-4 font-bold`}>
                      <img src={garaje} alt="garage" className='w-7 h-7' />
                      {garage}
                    </p>
                    <p className={`${square ? "" : "hidden"} mb-3 text-gray-700 flex items-end gap-4 font-bold`}>
                      <img src={squareIc} alt="square" className='w-7 h-7' />
                      {square}
                    </p>
                  </div>
              }
              <p className={`${ubicacion ? "flex" : "hidden"} mb-3 font-normal text-gray-700`}>
                Ubicación: {ubicacion}
              </p>
              <p className={`${price ? "" : "flex"} mb-3 font-normal text-gray-700`}>
                $ {price}
              </p>
            </div>
          </div>
        </Link >
        <div className={`${user ? "flex" : "hidden"} w-full flex-col justify-center items-center relative bottom-0`}>
          <button
            aria-label="sold"
            onClick={handleSold}
            type="button"
            className="bottom-0 w-[90%] text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 inline-flex justify-center items-center mt-2"
          >
            {sold ? "Quitar vendido" : "Poner como vendido"}
          </button>
        </div>
        <button aria-label="delete" onClick={openModal} type="button" className={`${user ? "flex" : "hidden"} absolute top-0 right-0 text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-2`}>
          <img src={trash} className='w-5 h-5 mr-1' alt="deleted" />
          Eliminar
        </button >
        <button aria-label="archive" onClick={handleArchived} type="button" className={`${user ? "flex" : "hidden"} absolute top-0 left-0 text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center ml-2 mb-2 mt-2`
        }>
          {archived ? "Desarchivar" : "Archivar"}
        </button >
      </div >
    </>
  );
}
