import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Card({ id, type, titulo, descripcion, hectareas, lotes, ubicacion, terrain, price, images, boolean, setBoolean }) {

  async function deleteField() {
    await axios.delete(`/fields/${id}`)
    setBoolean(!boolean)
  }

  return (
    <>
      <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/card/${id}`}>
          <img className="rounded-t-lg" src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg" alt="" />
        </Link>
        <div className="p-5">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">HECTÁREAS: {hectareas}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lotes: {lotes}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ubicación: {ubicacion}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
          </div>
        </div>
        <button className='absolute top-0 right-0 mx-2 text-white text-lg z-30 hover:text-black' onClick={() => deleteField()}> X </button>
      </div>
    </>
  )
}