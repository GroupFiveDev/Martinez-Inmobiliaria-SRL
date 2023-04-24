import { useParams } from "react-router-dom";
let cards = [
  {
    id: 1,
    titulo: "Campo Los Alamos",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 1000,
    precio: 5000000,
    lotes: 10,
    ubicacion: "Provincia de Buenos Aires"
  },
  {
    id: 2,
    titulo: "Campo La Esperanza",
    descripcion: "Campo ideal para agricultura y ganadería, con amplio terreno y fértil suelo.",
    hectareas: 800,
    precio: 6000000,
    lotes: 8,
    ubicacion: "Provincia de Córdoba"
  },
  {
    id: 3,
    titulo: "Estancia San Martin",
    descripcion: "Gran estancia con vistas panorámicas de las montañas y amplio terreno para caza y pesca.",
    hectareas: 5000,
    precio: 15000000,
    lotes: 50,
    ubicacion: "Provincia de Chubut"
  },
  {
    id: 4,
    titulo: "Campo El Zorzal",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 1200,
    precio: 5500000,
    lotes: 12,
    ubicacion: "Provincia de Buenos Aires"
  },
  {
    id: 5,
    titulo: "Campo El Potrerillo",
    descripcion: "Campo ideal para agricultura y ganadería, con amplio terreno y fértil suelo.",
    hectareas: 600,
    precio: 4000000,
    lotes: 6,
    ubicacion: "Provincia de San Luis"
  },
  {
    id: 6,
    titulo: "Estancia Los Tamarindos",
    descripcion: "Gran estancia con vistas panorámicas de las montañas y amplio terreno para caza y pesca.",
    hectareas: 4500,
    precio: 20000000,
    lotes: 45,
    ubicacion: "Provincia de Río Negro"
  },
  {
    id: 7,
    titulo: "Campo La Argentina",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 900,
    precio: 4500000,
    lotes: 9,
    ubicacion: "Provincia de Buenos Aires"
  },
  {
    id: 8,
    titulo: "Campo El Recuerdo",
    descripcion: "Campo ideal para agricultura y ganadería, con amplio terreno y fértil suelo.",
    hectareas: 700,
    precio: 5500000,
    lotes: 7,
    ubicacion: "Provincia de Córdoba"
  },
  {
    id: 9,
    titulo: "Estancia Los Corrales",
    descripcion: "Gran estancia con vistas panorámicas de las montañas y amplio terreno para caza y pesca.",
    hectareas: 6000,
    precio: 18000000,
    lotes: 60,
    ubicacion: "Provincia de Neuquén"
  },
  {
    id: 10,
    titulo: "Campo La Providencia",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 1100,
    precio: 6000000,
    lotes: 11,
    ubicacion: "Provincia de Buenos Aires"
  }]
export default function CardDetail() {
  
  const { id } = useParams();
  const card = cards.find((card) => card.id === Number(id));

  return (
    <>
    <div class="m-20">
      <h5 class="bg-[#368a8c] mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.titulo}</h5>
      <div class="flex flex-wrap">
    <div>
      <div id="default-carousel" class="relative" data-carousel="slide">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img class="rounded-t-lg" src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg" alt="" />
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">HECTÁREAS: {card.hectareas}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lotes: {card.lotes}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ubicación: {card.ubicacion}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.descripcion}</p>
    </div>
    <div class="m-3">
      <h2>Contacto</h2>
    </div>
    </div>
    <div>
      <h1>MAPA</h1>
    </div>
    </div>
    </>
  );
}