import axios from "axios";
import { Link } from "react-router-dom";
import trash from "../../assets/icons/trash.png";
import { useState } from "react";

export default function Card2({
  id,
  titulo,
  descripcion,
  hectareas,
  lotes,
  ubicacion,
  terrain,
  price,
  images,
  boolean,
  setBoolean,
}) {
  const [loading, setLoading] = useState(0);

  async function deleteField() {
    setLoading(1);
    await axios.delete(`/fields/${id}`);
    setBoolean(!boolean);
    setLoading(0);
  }

  return (
    <>
      <div className="w-full absolute top-0 left-0">
        <div role="status" className={`${loading ? "" : "hidden"} flex m-2`}>
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#368a8c]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <Link to={`/card/${id}`}>
          <img
            class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              {titulo}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {descripcion}
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              HECTÁREAS: {hectareas}
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Lotes: {lotes}
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Ubicación: {ubicacion}
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-300">
              Aptitud: {terrain}
              <p class="text-xs text-neutral-500 dark:text-neutral-300">
                $ {price}
              </p>
            </p>
          </div>
        </Link>
        <div className="absolute bottom-0 w-full flex justify-center items-center">
          <button
            type="button"
            className="bottom-0 w-[90%] text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 inline-flex justify-center items-center mr-2 mb-2 mt-2"
          >
            Modificar
          </button>
        </div>
        <button
          onClick={() => deleteField()}
          type="button"
          className="absolute top-0 right-0 text-white bg-[#368a8c] hover:bg-[#2c7172] font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-2"
        >
          <img src={trash} className="w-5 h-5 mr-1" alt="deleted" />
          Eliminar
        </button>
      </div>
    </>
  );
}