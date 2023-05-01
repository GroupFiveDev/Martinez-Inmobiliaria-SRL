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
      {/* <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
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
      </div> */}

      <Link to={`/card/${id}`}>
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
            style={{
              backgroundImage: `url(${"https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg"})`,
            }}
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b-lg lg:rounded-b-none lg:rounded-r-lg p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {titulo}
              </div>
              <p className="text-gray-700 text-base">{descripcion}</p>
            </div>
            <div className="flex items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"></button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
