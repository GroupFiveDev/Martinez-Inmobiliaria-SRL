import axios from 'axios';
import { Link } from 'react-router-dom';
import trash from '../../assets/icons/trash.png'
import { useState } from 'react';
import Modal from '../modal/Modal';
import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../context/authContext';

export default function Card({ id, titulo, descripcion, hectareas, lotes, ubicacion, terrain, price, images, archived, sold, boolean, setBoolean }) {
  const [loading, setLoading] = useState(0)
  const { isOpen, openModal, closeModal } = useModal()
  const { user } = useAuth()

  async function deleted() {
    setLoading(1)
    await axios.delete(`/fields/${id}`)
    setBoolean(!boolean)
    setLoading(0)
    closeModal()
  }

  async function handleArchived() {
    await axios.patch(`/fields/${id}`, { archived: !archived })
    setBoolean(!boolean)
  }

  async function handleSold() {
    await axios.patch(`/fields/${id}`, { sold: !sold })
    setBoolean(!boolean)
  }

  return (
    <>
      {/* Modal de comfirmacion */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h1 className='p-5 text-white font-Montserrat'>Seguro que quieres eliminar esta propiedad?</h1>
        <div className='w-full flex justify-center items-end gap-5'>
          <button className="mb-3 md:my-0 w-fit text-center font-Montserrat bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:bg-green-500 block p-2.5" onClick={deleted}>
            Sí, eliminar.
          </button>

          <button onClick={closeModal} className="mb-3 md:my-0 w-fit text-center font-Montserrat bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:bg-red-400 block p-2.5">
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
      <div className={`relative max-w-sm bg-[#368b8c26] border border-gray-200 rounded-lg shadow m-3 ${loading ? "opacity-50" : ""}`}>
        <Link to={`/card/${id}`}>
          <div className='flex flex-col justify-center relative'>
            <img className={`rounded-t-lg ${sold || archived ? "blur-sm" : ""}`} src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg" alt="" />
            <div className={`absolute bg-[#368b8cc1] w-full h-14 flex justify-center items-center ${sold ? "" : "hidden"}`}>
              <h1 className='text-white font-bold text-3xl font-Montserrat'>VENDIDO</h1>
            </div>
            <div className={`absolute bg-[#000000c1] w-full h-14 flex bottom-5 justify-center items-center ${archived ? "" : "hidden"}`}>
              <h1 className='text-white font-bold text-3xl font-Montserrat'>ARCHIVADO</h1>
            </div>
          </div>
          <div className="p-5">
            <div className="px-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">HECTÁREAS: {hectareas}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lotes: {lotes}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ubicación: {ubicacion}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aptitud: {terrain}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {price}</p>
            </div>
          </div>
        </Link>
        <div className={`${user ? "flex" : "hidden"} bottom-0 w-full flex-col justify-center items-center`}>
          <button type="button" className="bottom-0 w-[90%] text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 inline-flex justify-center items-center mb-2 mt-2">
            Modificar
          </button>
          <button onClick={handleSold} type="button" className="bottom-0 w-[90%] text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 inline-flex justify-center items-center mb-2 mt-2">
            {sold ? "Quitar vendido" : "Poner como vendido"}
          </button>
        </div>
        <button onClick={openModal} type="button" className={`${user ? "flex" : "hidden"} absolute top-0 right-0 text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-2`}>
          <img src={trash} className='w-5 h-5 mr-1' alt="deleted" />
          Eliminar
        </button>
        <button onClick={handleArchived} type="button" className={`${user ? "flex" : "hidden"} absolute top-0 left-0 text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center ml-2 mb-2 mt-2`}>
          {archived ? "Desarchivar" : "Archivar"}
        </button>

      </div >
    </>
  )
}